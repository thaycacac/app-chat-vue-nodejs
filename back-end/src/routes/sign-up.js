'use strict'

const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Users = mongoose.model('users')

router.post('/', (req, res) => {
  let user = new Users(req.body)
  user.save()
  .then(() => {
    res.status(201).send({ 
      message: "Register succeess" 
    })
  })
  .catch(() => {
    res.status(400).send({
      message: "Account already exists"
    })
  })
})

module.exports = router
