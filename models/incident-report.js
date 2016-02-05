var mongoose = require('mongoose')

var incidentSchema = new mongoose.Schema({
  team: [String],
  date: String,
  time: String,
  location: String,
  summary: {
    behavior: Boolean,
    vehicle: Boolean,
    vandalism: Boolean,
    safety: Boolean,
    injury: Boolean,
    suspicion: Boolean,
    lostitem: Boolean,
    theft: Boolean,
    parking: Boolean,
    trespassing: Boolean,
    threat: Boolean,
    other: Boolean
  },
  description: String,
  person: [{
    state: {
      type: String,
      validate: {
        validator: function (v) {
          return /[victim]|[witness]|[suspect]|[other]/.test(v)
        },
        message: 'Validator failed for path `{PATH}` with value `{VALUE}`'
      }
    },
    name: String,
    address: String,
    description: String
  }],
  misc: String
})

var incident = mongoose.model('incident', incidentSchema)
module.exports = incident
