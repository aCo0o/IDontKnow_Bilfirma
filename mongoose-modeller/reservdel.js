var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var reservdelSchema = new Schema({
		namn : String,
		pris : String,
		bil : String
	});

module.exports = mongoose.Schema('Reservdel', reservdelSchema);




