var mongoose = require('mongoose');

var reservdelSchema = new mongoose.Schema({
    namn : {type: String, required: true},
    pris : {type: Number, required: true},
    skada : {type: mongoose.Schema.Types.ObjectId, ref:'skador'}
  });

module.exports = mongoose.model('reservdelar', reservdelSchema);