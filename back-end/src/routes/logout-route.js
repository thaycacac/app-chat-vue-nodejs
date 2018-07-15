'use strict';

const express = require('express');
const router = express.Router();
const restrict = require('../methods').restrict;

router.get('/', restrict, (req, res) => {
  req.session.destroy(() => {
    res.status(200).send()
  });
});

module.exports = router;
