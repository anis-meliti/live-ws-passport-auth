const express = require('express');
const connectDB = require('./config/connectDB');
const contact = require('./Routes/contact');
const user = require('./Routes/user');
const app = express();

// 1- Connect to database
connectDB();
//2- parsing response
app.use(express.json());

app.use('/contact', contact);
app.use('/user', user);

const PORT = process.env.PORT || 4000;
app.listen(PORT, (err) =>
  err
    ? console.error(err)
    : console.log(`🚀 is 🏃 on ${PORT}
`)
);
