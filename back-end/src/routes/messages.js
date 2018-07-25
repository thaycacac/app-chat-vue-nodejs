'use strict'

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Messages = require('../models/messages')

router.post('/', (req, res, next) => {
  const message = new Messages({
    text: req.body.text,
    sender: req.body.sender
  })
  res.status(201).json({
    message: 'POST success',
    createdMessage: message
  })
  message.save()
  .then(result => {
    res.status(201).json({
      message: 'POST success',
      createdMessage: result
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({
      error: err
    })
  })
})

router.get('/', (req, res, next) => {
  Messages.find()
  .select('text sender')
  .exec()
  .then(doc => {
    res.status(200).json(doc)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({
      error: err
    })
  })
})

module.exports = router