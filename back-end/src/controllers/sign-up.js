'use strict'

const mongoose = require('mongoose')
const Users = mongoose.model('users')

exports.post = (req, res) => {
  let user = new Users(req.body)
  user.save()
  .then(() => {
    res.status(201).send({ message: "Đăng ký thành công." })
  })
  .catch(() => {
    res.status(400).send({ message: "Tài khoản đã tồn tại" })
  })
}
