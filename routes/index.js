var express = require('express')
var router = module.exports = express.Router()

router.get('/', function (req, res) {
	res.render('index', {
		title: 'Thing!',
		footermotd: 'Main page'
	})
})

router.get('/diff', function (req, res) {
	res.render('index', {
		title: 'different',
		footermotd: 'Different page'
	})
})

router.get('/del', function (req, res) {
	res.render('index', {
		title: 'dels',
		footermotd: 'Different'
	})
})
