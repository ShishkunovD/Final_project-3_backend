const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Schema = mongoose.Schema;

const goodSchema = new Schema({
  where: String,
  howMuch: Number,
  day: String
});

const Good = mongoose.model("goods", goodSchema);

app.use(cors());

const url = 'mongodb+srv://ShishkunovD:restart987!@cluster0.8tbt5.mongodb.net/Module-3_final_project?retryWrites=true&w=majority';
mongoose.connect(url);

app.listen('8000', () => {
  console.log('Server is running..');
})