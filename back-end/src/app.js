'use strict'

const express = require('express')
const session = require('express-session')
const history = require('connect-history-api-fallback')
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

const loginRoute = require('./routes/sign-in-route')
const logoutRoute = require('./routes/logout-route')
const signupRoute = require('./routes/sign-up-route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({
  secret: "Mobe, guarda meu segredo",
  resave: false,
  saveUninitialized: false
}));

const views = express.static('views')
app.use(views)
app.use(history({
  disableDotRule: true,
  verbose: false
}));
app.use(views)

app.use('/api/login', loginRoute)
app.use('/api/logout', logoutRoute)
app.use('/api/signup', signupRoute)

module.exports = app
