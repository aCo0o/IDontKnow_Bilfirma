var mongoose = require('mongoose');

var BilSchema = new Schema({
		model : {type: String, required: true},
		regnum : {type: String, required: true},
		kund : [{ type: mongoose.Schema.Types.ObjectId, ref: "Kund"]}
	});

module.exports = mongoose.model('Bil', BilSchema);

