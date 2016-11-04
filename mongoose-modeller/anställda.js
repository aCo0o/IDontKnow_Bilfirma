var mongoose = require('mongoose');

var anstalldModel = mongoose.Model({
		namn : {type: String, require: true},
		semester : {type: String, require: false},
		bil : [{type: mongoos.Model.Types.ObjectId, ref: 'Bil'}]
	});

var Anstalld = mongoose.model('Anstalld', anstalldModel);
module.exports = Anstalld;