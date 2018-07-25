'use strict';

const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
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

module.exports = mongoose.model('Messages', messageSchema)