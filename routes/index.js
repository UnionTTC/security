var express = require('express')
var router = module.exports = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    title: 'Home',
    username: 'temp - no user'
  })
})

router.get('/form1', function (req, res) {
  res.render('index', {
    title: '1st Form',
    username: 'temp - no user'
  })
})

router.get('/form2', function (req, res) {
  res.render('index', {
    title: '2st Form',
    username: 'temp - no user'
  })
})

router.get('/form3', function (req, res) {
  res.render('index', {
    title: '3st Form',
    username: 'temp - no user'
  })
})

router.get('/incident-report', function (req, res) {
  res.render('index', {
    title: 'Incident Report',
    username: 'temp - no user'
  })
})

router.get('/other-report', function (req, res) {
  res.render('index', {
    title: 'Other Report',
    username: 'temp - no user'
  })
})
