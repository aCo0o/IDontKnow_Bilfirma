var mongoose = require('mongoose');

var kundModel = mongoose.Model({
		namn : {type: String, require: true},
		persnum : {type: String, require: false},
		adress : {type: String, require: false},
		//lösord : {type: String, require: false},
		bil : [{type: mongoose.Model.Types.ObjektId, ref: 'Bil'}]


	});

var Kund = mongoose.model('Kund', kundModel);
module.exports = Kund;