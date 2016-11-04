var mongoose = require('mongoose');

var bilModel = mongoose.bilModel({
		model : {type: String, require: true},
		regnum : {type: String, require: true},
		kund : [{type: mongoos.Model.Types.ObjectId, ref: 'Kund'}]
	});

var Bil = mongoose.model('Bil', bilModel);
module.exports = Bil;
