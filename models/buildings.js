var mongoose = require('mongoose')
var buildingsSchema = new mongoose.Schema({
  buildings: [String]
})

var buildings = mongoose.model('buildings', buildingsSchema)
module.exports = buildings
