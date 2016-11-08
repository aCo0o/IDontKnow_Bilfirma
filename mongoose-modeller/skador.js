var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var skadorSchema = new Schema({
		status : String,
		beskr : String,
		arbetsTim : String,
		harArbetat : Array,
		Bil : String,
		Anstalld : String
	});

module.exports = mongoose.Schema('Skada', skadorSchema);