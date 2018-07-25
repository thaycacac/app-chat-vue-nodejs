'use strict'

const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://thaycacac:Camonem123@ds239071.mlab.com:39071/test-login', {
  useMongoClient: true
}).then(() => {
  console.log('Database connected')
}, err => {
  console.log('Can not connect on database', err)
})

const users = require('./models/users')
const messages = require('./models/messages')

const loginRoute = require('./routes/sign-in')
const logoutRoute = require('./routes/logout')
const signupRoute = require('./routes/sign-up')
const messagesRouter = require('./routes/messages')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({
  secret: "Keep my secret.",
  resave: false,
  saveUninitialized: false
}));

const views = express.static('views')
app.use(views)
app.use(views)

app.use('/api/login', loginRoute)
app.use('/api/logout', logoutRoute)
app.use('/api/signup', signupRoute)
app.use('/api/message', messagesRouter)

module.exports = app
