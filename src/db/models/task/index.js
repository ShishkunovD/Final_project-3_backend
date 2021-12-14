const mongoose = require('mongoose');

const { Schema } = mongoose;

const goodSchema = new Schema({
  where: String,
  howMuch: Number,
  day: String
});

module.exports = Good = mongoose.model("goods", goodSchema);