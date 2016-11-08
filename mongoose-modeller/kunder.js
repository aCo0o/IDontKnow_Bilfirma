var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var kundSchema = new Schema({
		name : String,
		persnum : Number,
		address : String,
		bil:   String
	});

module.exports = mongoose.model('Kund', kundSchema);