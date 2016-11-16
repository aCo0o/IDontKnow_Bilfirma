var mongoose = require('mongoose');

var reservdelSchema = new mongoose.Schema({
    namn : {type: String, required: true},
    pris : {type: Number, required: true},
    bil : {type: mongoose.Schema.Types.ObjectId, ref:'bilar'}
  });

module.exports = mongoose.model('reservdelar', reservdelSchema);