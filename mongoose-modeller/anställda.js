var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var anstalldSchema = new Schema({
		namn : String,
		semester : String,
		bil : String
	});

module.exports = mongoose.model('Anstalld', anstalldSchema);