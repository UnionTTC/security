var mongoose = require('mongoose')

var routineSchema = new mongoose.Schema({
  team: [String],
  time: String,
  date: String,
  building: String,
  room: String,
  issue: Boolean, // locked unlocked occupied
  notes: String
})

// cookie to keep track of position
// Close progression after 3 hours
// Fail state notification

var routine = mongoose.model('routine', routineSchema)
module.exports = routine
