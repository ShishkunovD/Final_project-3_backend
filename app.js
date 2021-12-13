const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());

const url = 'mongodb+srv://ShishkunovD:restart987!@cluster0.8tbt5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url);

app.listen('8000', () => {
  console.log('Server is running..');
})