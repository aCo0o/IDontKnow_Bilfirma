var reservdelar = [
	    {"namn": "handbromsbackar", "pris": "450,00", "bil": "Mercedes-Benz C111"},
		{"namn": "styrstag", "pris": "200,00", "bil": "Audi A7"},
		{"namn": "oljefilter", "pris": "250,00", "bil": "Peugeot 307"},
		{"namn": "kupefliter", "pris": "350,00", "bil": "KIA Picanto"},
		{"namn": "fjädrar", "pris": "500,00", "bil": "BMW Z8"},
		{"namn": "tändstift", "pris": "300,00", "bil": "Mini Cooper"},
	];

	//get
	exports.visareservdelar = function(req,res){
      res.send(reservdelar);
    };

   /* // GET By ID //
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
            status: req.body.status,
            beskr:  req.body.beskr,
            arbetsTim: req.body.arbetsTim,
            harArbetat: req.body.harArbetat,
            bil: req.body.bil,
            anstalld: req.body.anstalld,

      })
      res.json({meddelande: "Det har nu lagts till en skada"})
      res.send('/skador');
    }


    // DELETE // 
    exports.tabortskada = function(req, res) {
      var id = parseInt(req.params.id)-1;
      var bortaskadan = skador.splice(id,1);
      res.json({meddelande: "sakadan är nu borta"});
      res.send('/skador');
    }; */
