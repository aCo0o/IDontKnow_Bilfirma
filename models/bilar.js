var mongoose = require('mongoose')

var BilSchema = new mongoose.Schema({
    model : {type: String, required: true},
    regnum : {type: String, required: true},
    kund : {type: mongoose.Schema.Types.ObjectId, ref:'kunder'},
    skada: {type: mongoose.Schema.Types.ObjectId, ref:'skador'}
  });

module.exports = mongoose.model('bilar', BilSchema);
