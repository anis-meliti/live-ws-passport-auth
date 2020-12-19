const express = require('express');
const {
  getAllContact,
  addContact,
  deleteContact,
  editContact,
} = require('../controllers/contact.controller');
const { contactRules, validator } = require('../middleware/validator');
const Contact = require('../models/Contact');

const Router = express.Router();

Router.get('/getAllContact', getAllContact);
Router.post('/addContact', contactRules(), validator, addContact);
Router.delete('/deleteContact/:id', deleteContact);
Router.post('/editContact/:id', editContact);
module.exports = Router;
