var express = require('express')
var router = module.exports = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    title: 'Thing!'
  })
})

router.get('/diff', function (req, res) {
  res.render('index', {
    title: 'different'
  })
})
