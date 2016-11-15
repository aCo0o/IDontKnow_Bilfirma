var skador = [
	    { "id" :0,"status": "Mercedes-Benz C111", "beskr": "DEF 425", "arbetsTim": "Bertil Nilsson", "harArbetat": "","bil": "","anstalld": "",},
		{ "id" :1, "status" : "Audi A7", "beskr": "JKL 232", "arbetsTim": "Andreas Månsson", "harArbetat": "","bil": "","anstalld": "",},
		{ "id" :2,"status": "Peugeot 307", "beskr": "KOS 577", "arbetsTim": "Daniel Westerström", "harArbetat": "","bil": "","anstalld": "",},
		{ "id" :3,"status": "KIA Picanto", "beskr": "STV 123", "arbetsTim": "Joakim Persson", "harArbetat": "","bil": "","anstalld": "",},
		{ "id" :4,"status": "BMW Z8", "beskr": "ZJF 791", "arbetsTim": "William Eliasson", "harArbetat": "","bil": "","anstalld": "",},
		{ "id" :5,"status": "Mini Cooper", "beskr": "FAT 368", "arbetsTim": "Linus Hermansson", "harArbetat": "","bil": "","anstalld": "",},
	];

	//get
	exports.visaskador = function(req,res){
      res.send(skador);
    };

    // GET By ID //
   exports.hittaskadamedID = function(req, res){
   res.send(skador[req.params.id]);
    };

    // PUT //
      exports.uppdateraskada = function (req, res) { 
      var id = req.params.id;
      skador[id].id = req.params.id;
      skador[id].model = req.body.model;
      skador[id].regnum = req.body.regnum;
      skador[id].kund = req.body.kund;
      res.json({meddelande: "skada är uppdaterat"})
   };

   // POST //
    exports.laggtillskada = function(req, res) {
       skador.push({
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
    };

    