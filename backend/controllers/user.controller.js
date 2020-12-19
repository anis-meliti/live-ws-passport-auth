const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');

const secretOrKey = config.get('secretOrKey');
exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = new User({
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);
    newUser.password = hash;

    const addRes = await newUser.save();

    res.status(201).json(addRes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const searchRes = await User.findOne({ email });
    if (!searchRes) return res.status(404).json({ error: `bad credentials!` });
    const isMatch = await bcrypt.compare(password, searchRes.password);
    if (!isMatch) return res.status(404).json({ error: `bad credentials!` });
    const payload = {
      id: searchRes._id,
      email: searchRes.email,
    };
    const token = await jwt.sign(payload, secretOrKey);
    res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

exports.getAllContact = async (req, res) => {
  const { id } = req.user;

  try {
    const searchedUser = await User.findById(id).populate('contacts');
    res.status(200).json(searchedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

exports.addContact = async (req, res) => {
  const { user } = req;
  const { id } = req.body;
  try {
    const searchUser = await User.findById(user.id);
    searchUser.contacts.push(id);
    const updatedUser = await User.findByIdAndUpdate(user.id, searchUser, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};
