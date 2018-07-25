'use strict'

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Messages = require('../models/messages')

router.post('/', (req, res, next) => {
  const message = new Messages({
    content: req.body.content,
    user: req.body.user
  })
  res.status(201).json({
    message: 'POST success',
    createdMessage: result
  })
  message.save()
  .then(result => {
    console.log(result)
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
  console.log('object')
  Messages.find()
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