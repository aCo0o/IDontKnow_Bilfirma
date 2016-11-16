var mongoose = require('mongoose')

var semesterSchema = new mongoose.Schema({
    fran : {type: Date, required: true},
    till : {type: Date, required: true},

  });

module.exports = mongoose.model('semester', semesterSchema);
