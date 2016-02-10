var express = require('express')
var router = module.exports = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    title: 'Home',
    username: 'temp - no user',
    isAdmin: true
  })
})

router.get('/form1', function (req, res) {
  res.render('form1', {
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

router.get('/your-forms', function (req, res) {
  res.render('index', {
    title: 'Submitted Forms',
    username: 'temp - no user'
  })
})

router.get('/door-check', function (req, res) {
  res.render('index', {
    title: 'Door Check',
    username: 'temp - no user'
  })
})

router.get('/other-report', function (req, res) {
  res.render('index', {
    title: 'Other Report',
    username: 'temp - no user'
  })
})

router.get('/door-management', function (req, res) {
  res.render('management', {
    title: 'Door Management',
    username: 'temp - no user',
    managementRel: 'Door',
    firstField: 'Location',
    secondField: 'Checked Tonight',
    thirdField: 'View Logs', //remove?
    rows: [['Prescott Main', true], ['Culver West', false], ['Krueger Main', true]]
  })
})

router.get('/form-management', function (req, res) {
  res.render('management', {
    title: 'Form Management',
    username: 'temp - no user',
    managementRel: 'Form',
    firstField: 'Name',
    secondField: '# of Submissions',
    thirdField: 'View Form',
    rows: [['Form 1', 2], ['Form 2', 76], ['Form 3', 789], ['Incident Report', 235], ['Other Report', 63]]
  })
})

router.get('/user-management', function (req, res) {
  res.render('management', {
    title: 'User Management',
    username: 'temp - no user',
    managementRel: 'User',
    firstField: 'Student Name',
    secondField: 'Hours per Week',
    thirdField: 'View Assignments',
    rows: [['James Clague', 24], ['Gabriel Flechas', 1], ['Keith Wade', 9], ['Joseph Smittick', 0]]
  })
})
