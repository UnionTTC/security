var mongoose = require('mongoose')

var shiftSchema = new mongoose.Schema({
  team: [String],
  time: String,
  date: String,
  items: {
    badge1: Boolean,
    badge2: Boolean,
    radio1: Boolean,
    radio2: Boolean,
    cartKeys: Boolean,
    mainKeys: Boolean,
    phone: Boolean,
    light1: Boolean,
    light2: Boolean
  },
  note: String
})

var shift = mongoose.model('shift', shiftSchema)
module.exports = shift
