var bilar = [
	  {"model": "Mercedes-Benz C111", "regnum": "DEF 425", "kund": "Bertil Nilsson", "id": 0},
		{"model": "Audi A7", "regnum": "JKL 232", "kund": "Andreas Månsson", "id": 1},
		{"model": "Peugeot 307", "regnum": "KOS 577", "kund": "Daniel Westerström", "id": 2},
		{"model": "KIA Picanto", "regnum": "STV 123", "kund": "Joakim Persson", "id": 3},
		{"model": "BMW Z8", "regnum": "ZJF 791", "kund": "William Eliasson", "id": 4},
		{"model": "Mini Cooper", "regnum": "FAT 368", "kund": "Linus Hermansson", "id": 5},
	];

	exports.visabilar = function(req,res){
      res.send(bilar);
    };

   /*// GET By ID //
   exports.hittabilmedID = function(req, res){
   res.send(bilar[req.params.id]);
    };

    // PUT //
      exports.uppdaterabil = function (req, res) { 
      var id = req.params.id;
      bilar[id].id = req.params.id;
      bilar[id].model = req.body.model;
      bilar[id].regnum = req.body.regnum;
      bilar[id].kund = req.body.kund;
      res.json({meddelande: "Bilen är uppdaterat"})
   };

   // POST //
    exports.laggtillbil = function(req, res) {
       bilar.push({
            id: req.params.id,
            model: req.body.model,
            regnum:  req.body.regnum,
            kund: req.body.kund
      })
      res.json({meddelande: "Det har nu lagts till en Bil"})
      res.send('/bilar');
    }



    // DELETE // 
    exports.tabortbil = function(req, res) {
      var id = parseInt(req.params.id)-1;
      var bortabilen = bilar.splice(id,1);
      res.json({meddelande: "Bilen är nu borta"});
      res.send('/bilar');
    };*/
