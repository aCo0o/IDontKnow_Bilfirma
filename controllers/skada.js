var skador = [
	    {"status": "Mercedes-Benz C111", "beskr": "DEF 425", "arbetsTim": "Bertil Nilsson", "harArbetat": "","bil": "","anstalld": "",},
		{"status": "Audi A7", "beskr": "JKL 232", "arbetsTim": "Andreas Månsson", "harArbetat": "","bil": "","anstalld": "",},
		{"status": "Peugeot 307", "beskr": "KOS 577", "arbetsTim": "Daniel Westerström", "harArbetat": "","bil": "","anstalld": "",},
		{"status": "KIA Picanto", "beskr": "STV 123", "arbetsTim": "Joakim Persson", "harArbetat": "","bil": "","anstalld": "",},
		{"status": "BMW Z8", "beskr": "ZJF 791", "arbetsTim": "William Eliasson", "harArbetat": "","bil": "","anstalld": "",},
		{"status": "Mini Cooper", "beskr": "FAT 368", "arbetsTim": "Linus Hermansson", "harArbetat": "","bil": "","anstalld": "",},
	];

	exports.visaskador = function(req,res){
      res.send(skador);
    };
