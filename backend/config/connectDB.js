const mongoose = require('mongoose');
const config = require('config');
const mongoUri = config.get('mongoUri');

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`💾 is connected ...`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
