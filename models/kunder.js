var mongoose = require('mongoose')

var kundSchema = new mongoose.Schema({
    namn : {type: String, required: true},
    tfn : {type: String, required: true},
  });

module.exports = mongoose.model('kunder', kundSchema);