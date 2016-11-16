var kunder = [
	    {"id":"1", "namn": "Bertil Nilsson", "persnum": "1980-04-20", "address": "Köpmannagatan 1", "bil": "Mercedes-Benz C111"},
		{"id":"2","namn": "Andreas Månsson", "persnum": "1984-05-02", "address": "Stortorget 12", "bil": "Audi A7"},
		{"id":"3","namn": "Daniel Westerström", "persnum": "1974-09-10", "address": "Bergavägen 34", "bil": "Peugeot 307"},
		{"id":"4","namn": "Joakim Persson", "persnum": "1970-07-09", "address": "Rönnerberga vägen 12", "bil": "KIA Picanto"},
		{"id":"5","namn": "William Eliasson", "persnum": "1965-10-12", "address": "Jonasvägen 1", "bil": "BMW Z8"},
		{"id":"6","namn": "Linus Hermansson", "persnum": "1984-03-12", "address": "Möllevångsgatan 14", "bil": "Mini Cooper"},
	];

	exports.visakunder = function(req,res){
      res.send(kunder);
    };

   // GET By ID //
   exports.hittaKundmedNamn = function(req, res){
   res.send(kunder[req.params.id]);
    };

    // PUT //
      exports.uppdateraKund = function (req, res) { 
      var id = req.params.id;
      kunder[id].namn = req.params.namn;
      kunder[id].persnum = req.body.persnum;
      kunder[id].address = req.body.address;
      kunder[id].bil = req.body.bil;
      res.json({meddelande: "Kunden är uppdaterat"})
   };

   // POST //
    exports.laggTillKund = function(req, res) {
       kunder.push({
            id: req.params.id,
            namn: req.body.namn,
            persnum:  req.body.persnum,
            address: req.body.address,
            bil: req.body.bil
      })
      res.json({"meddelande": "kunder"})
      res.send('/kunder')
    }



    // DELETE // 
    exports.taBortKund = function(req, res) {
      var id = parseInt(req.params.id)-1;
      var bortakunden = kunder.splice(id,1);
      res.json({meddelande: "Kunden är nu borta"});
      res.send('/kunder');
    };

