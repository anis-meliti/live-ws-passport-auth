const express = require('express');
const {
  register,
  login,
  getAllContact,
  addContact,
} = require('../controllers/user.controller');
const { validator, userRules } = require('../middleware/validator');
const isAuth = require('../middleware/setup-passport');

const Router = express.Router();

Router.post('/register', userRules(), validator, register);
Router.post('/login', userRules(), validator, login);
Router.get('/me', isAuth(), getAllContact);
Router.post('/addContact', isAuth(), addContact);

module.exports = Router;
