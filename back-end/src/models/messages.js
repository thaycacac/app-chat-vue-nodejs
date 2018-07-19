'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  content: {
    type: String,
    require: true,
    trim: true
  },
  user: {
    type: String,
    required: true,
    trim: true
  }
})

module.exports = mongoose.model('messages', schema)