/* denna hanterar AppRoutes mot respektive modell*/

var bil 		= require('./controllers/bil.js');
var kund 		= require('./controllers/kund.js');
var skada 		= require('./controllers/skada.js');
var anstalld 	= require('./controllers/anstalld.js');
var reservdel 	= require('./controllers/reservdel.js');

module.exports = {
	
	WatchingYou : function (app, req, res) {

		app.get('/',function (req,res) {
			res.json("Välkommen till iDontKnow's - Bilfirma");
			console.log("welcome to /");
		});

		// Bilar
		app.get('/bilar', 			bil.visabilar);
		app.get('/bilar/:id', 		bil.hittabilmedID);
		app.put('/bilar/:id', 		bil.uppdaterabil);
		app.post('bilar', 			bil.laggtillbil);
		app.delete('/bilar/:id', 	bil.tabortbil);

		// Kunder
		app.get('/kunder', 			kund.visakunder);



		// Skador
		app.get('/skador', 			skada.visaskador);
		app.get('/skador/:id', 		skada.hittaskadamedID);
		app.put('/skador/:id', 		skada.uppdateraskada);
		app.post('/skador', 		skada.laggtillskada);
		app.delete('/skador/:id',   skada.tabortskada);


		// Anställda
		app.get('/anstallda', 		anstalld.visaAlla);
		app.get('/anstalld/:id', 	anstalld.visaEnAnstalld);
		app.post('/anstallda', 		anstalld.sparaAnstalld);
		app.put('/anstalld/:id', 	anstalld.uppdateraAnstalld);
		app.delete('/anstalld/:id', anstalld.taBortAnstalld);
		


		// Resevdelar
		app.get('/reservdelar', 	reservdel.visareservdelar);
		app.get('/reservdelar/:id', reservdel.hittareservdelmedID);
		app.put('/reservdelar/:id', reservdel.uppdaterareservdel);
		app.post('/reservdelar', 	reservdel.laggtillreservdel);
		app.delete('/reservdelar/:id', reservdel.tabortreservdel);

	}

}