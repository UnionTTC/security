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

//  first/second/thirdField: table headers for management
router.get('/door-management', function (req, res) {
  res.render('management', {
    title: 'Door Management',
    username: 'temp - no user',
    managementRel: 'Door',
    firstField: 'Location',
    secondField: 'Checked Tonight',
    thirdField: 'View Logs', // remove?
    addNewPath: '/add-new-door',
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
    addNewPath: '/add-new-form',
    rows: [['Form 1', 2], ['Form 2', 76], ['Form 3', 789], ['Incident Report', 235], ['Other Report', 63]]
  })
})

router.get('/user-management', function (req, res) {
  res.render('management', {
    title: 'User Management',
    username: 'temp - no user',
    managementRel: 'User',
    firstField: 'Student Name',
    secondField: 'Permission Level',
    thirdField: 'Review Assignments',
    addNewPath: '/add-new-user',
    rows: [['James Clague', 'Head of Security'], ['Gabriel Flechas', 'Admin'], ['Keith Wade', 'Head Officer'], ['Joseph Smittick', 'Officer']]
  })
})

router.get('/add-new-user', function (req, res) {
  res.render('newUser', {
    title: 'Add New User',
    username: 'temp - no user'
  })
})

router.get('/add-new-form', function (req, res) {
  res.render('newForm', {
    title: 'Add New Form',
    username: 'temp - no user'
  })
})

router.get('/add-new-door', function (req, res) {
  res.render('newDoor', {
    title: 'Add New Door',
    username: 'temp - no user'
  })
})

router.get('/user-settings', function (req, res) {
  res.render('settings', {
    title: 'Settings',
    username: 'temp - no user'
  })
})
