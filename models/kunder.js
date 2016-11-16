var mongoose = require('mongoose')

var kundSchema = new mongoose.Schema({
    name : {type: String, required: true},
    tfn : {type: String, required: true},
    bil:  {type: mongoose.Schema.Types.ObjectId, ref:'bilar'}
  });

module.exports = mongoose.model('kunder', kundSchema);