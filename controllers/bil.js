var bilar = [
	    {"model": "Mercedes-Benz C111", "regnum": "DEF 425", "kund": "Bertil Nilsson"},
		{"model": "Audi A7", "regnum": "JKL 232", "kund": "Andreas Månsson"},
		{"model": "Peugeot 307", "regnum": "KOS 577", "kund": "Daniel Westerström"},
		{"model": "KIA Picanto", "regnum": "STV 123", "kund": "Joakim Persson"},
		{"model": "BMW Z8", "regnum": "ZJF 791", "kund": "William Eliasson"},
		{"model": "Mini Cooper", "regnum": "FAT 368", "kund": "Linus Hermansson"},
	];

	exports.visabilar = function(req,res){
      res.send(bilar);
    };

   