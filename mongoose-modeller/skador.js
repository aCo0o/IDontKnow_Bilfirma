var mongoose = require('mongoose');

var skadaModel = mongoose.Model({
	status 	: {type: String, required: false}, //   kommande,  pågående  eller  avslutad.  
	beskr 	: {type: String, required: false},
	arbetsTim : {type: String, required: false},
	harArbetat : {type: Array, required: false},
	Bil: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bil' }],
	Anställd : [{type: mongoose.Model.Types.Array, ref: 'Anställd'}]
});

var Skada = mongoose.model('Skada', skadaModel);
module.exports = Skada;