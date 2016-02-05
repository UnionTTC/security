var mongoose = require('mongoose')

var routineSchema = new mongoose.Schema({
  team: [String],
  time: String,
  date: String,
  location: String,
  notes: String
})

var routine = mongoose.model('routine', routineSchema)
module.exports = routine
