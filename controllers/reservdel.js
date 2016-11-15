var reservdelar = [
	    {"id": 0, "namn": "handbromsbackar", "pris": "450,00", "bil": "Mercedes-Benz C111"},
		{"id": 1, "namn": "styrstag", "pris": "200,00", "bil": "Audi A7"},
		{"id": 2, "namn": "oljefilter", "pris": "250,00", "bil": "Peugeot 307"},
		{"id": 3, "namn": "kupefliter", "pris": "350,00", "bil": "KIA Picanto"},
		{"id": 4, "namn": "fjädrar", "pris": "500,00", "bil": "BMW Z8"},
		{"id": 5, "namn": "tändstift", "pris": "300,00", "bil": "Mini Cooper"},
	];

	//get
	exports.visareservdelar = function(req,res){
      res.send(reservdelar);
    };

   // GET By ID //
   exports.hittareservdelmedID = function(req, res){
   res.send(reservdelar[req.params.id]);
    };

    // PUT //
      exports.uppdaterareservdel = function (req, res) { 
      var id = req.params.id;
      reservdelar[id].id = req.params.id;
      reservdelar[id].namn = req.body.namn;
      reservdelar[id].pris = req.body.pris;
      reservdelar[id].bil = req.body.bil;
      res.json({meddelande: "reservdel är uppdaterat"})
   };

   // POST //
    exports.laggtillreservdel = function(req, res) {
       reservdelar.push({
            id: req.body.id,
            namn: req.body.namn,
            pris:  req.body.pris,
            arbetsTim: req.body.arbetsTim,
            bil: req.body.bil,

      })
      res.json({meddelande: "Det har nu lagts till en reservdel"})
      res.send('/reservdelar');
    }


    // DELETE // 
    exports.tabortreservdel = function(req, res) {
      var id = parseInt(req.params.id)-1;
      var bortasreserevdelen = reservdelar.splice(id,1);
      res.json({meddelande: "reservdelen är nu borta"});
      res.send('/reservdelar');
    }; 
