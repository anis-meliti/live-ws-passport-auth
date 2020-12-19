const Contact = require('../models/Contact');

exports.getAllContact = async (req, res) => {
  try {
    const searchRes = await Contact.find();
    res.json(searchRes);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};

exports.addContact = async (req, res) => {
  const { name, address, phoneNumber } = req.body;
  try {
    const newContact = new Contact({
      name,
      address,
      phoneNumber,
    });
    const addRes = await newContact.save();
    res.json(addRes);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};

exports.deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    await Contact.findByIdAndDelete(id);
    res.json(`contact deleted`);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};
exports.editContact = async (req, res) => {
  const { id } = req.params;
  const { name, email, address, phoneNumber } = req.body;
  try {
    const contactModified = await Contact.findByIdAndUpdate(
      id,
      {
        name,
        email,
        address,
        phoneNumber,
      },
      { new: true }
    );
    console.log(
      '🚀 ~ file: contact.controller.js ~ line 49 ~ exports.editContact= ~ contactModified',
      contactModified
    );
    res.json(contactModified);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};
