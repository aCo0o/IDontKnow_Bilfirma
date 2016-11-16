var mongoose = require('mongoose')

var skadorSchema = new mongoose.Schema({
    status : {type: String, required: true},
    beskr : {type: String, required: true},
    arbetsTim : {type: Number, required: true},
    harArbetat : {type: mongoose.Schema.Types.ObjectId, ref:'anstallda'}
  });

module.exports = mongoose.model('skador', skadorSchema);