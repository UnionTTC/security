var mongoose = require('mongoose')

var shiftSchema = new mongoose.Schema({
  thing: String
})

var shift = mongoose.model('shift', shiftSchema)
module.exports = shift
