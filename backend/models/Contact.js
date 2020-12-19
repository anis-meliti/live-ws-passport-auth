const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  phoneNumber: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});
module.exports = Contact = mongoose.model('contact', contactSchema);
