var kunder = [
	    {"namn": "Bertil Nilsson", "persnum": "1980-04-20", "address": "Köpmannagatan 1", "bil": "Mercedes-Benz C111"},
		{"namn": "Andreas Månsson", "persnum": "1984-05-02", "address": "Stortorget 12", "bil": "Audi A7"},
		{"namn": "Daniel Westerström", "persnum": "1974-09-10", "address": "Bergavägen 34", "bil": "Peugeot 307"},
		{"namn": "Joakim Persson", "persnum": "1970-07-09", "address": "Rönnerberga vägen 12", "bil": "KIA Picanto"},
		{"namn": "William Eliasson", "persnum": "1965-10-12", "address": "Jonasvägen 1", "bil": "BMW Z8"},
		{"namn": "Linus Hermansson", "persnum": "1984-03-12", "address": "Möllevångsgatan 14", "bil": "Mini Cooper"},
	];

	exports.visakunder = function(req,res){
      res.send(kunder);
    };