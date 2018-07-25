'use strict';

const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  text: {
    type: String,
    require: true,
    trim: true
  },
  sender: {
    type: String,
    required: true,
    trim: true
  }
})

module.exports = mongoose.model('Messages', messageSchema)