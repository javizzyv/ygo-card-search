const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 4,
    max: 25
  },
  type: {
    type: String,
    required: true,
    min: 4,
    max: 10
  },
  desc: {
    type: String,
    required: true,
    min: 6,
    max: 255
  }
});

module.exports = mongoose.model('Card', cardSchema);
