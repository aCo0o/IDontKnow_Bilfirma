var mongoose = require('mongoose')

var anstalldSchema = new mongoose.Schema({
    namn : {type: String, required: true},
    semester : {type: mongoose.Schema.Types.ObjectId, ref:'semester'}
  });

module.exports = mongoose.model('anstallda', anstalldSchema);