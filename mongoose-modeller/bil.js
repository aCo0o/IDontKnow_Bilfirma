var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BilSchema = new Schema({
		model : String,
		regnum : String,
		kund : String
	});

module.exports = mongoose.model('Bil', BilSchema);

