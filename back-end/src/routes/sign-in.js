'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const users = mongoose.model('users');

router.get('/', (req, res, next) => {
  if (req.session.user) {
    res.status(200).send({
      auth: true,
      user: {
          name: req.session.user.name,
          email: req.session.user.email
      }
    })
  } else {
    res.status(403).send({
      auth: false,
      msg: "You don’t have permission to access on this server"
    })
  }
})


router.post('/', (req, res, next) => {
  let auth = false;
  users.findOne({ email: req.body.email })
    .then(user => {
      if(user.password == req.body.password){
        req.session.regenerate(function(){
          req.session.user = {
            name: user.name,
            email: user.email
          }
          res.status(200).send({
            auth: true,
            message: "Logged in successfully",
            name: user.name,
            email: user.email
          });
        });
      }
      else{
        res.status(403).send({
          auth: false,
          type: 'password',
          message: "Wrong password"
        });
      }
    })
    .catch(err => {
      res.status(403).send({
        auth: false,
        type: 'email',
        message: "Email is not registered"
      });
    });
});

module.exports = router;