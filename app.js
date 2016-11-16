var express 	= require('express');
var bodyParser 	= require('body-parser');
var iAm 		= require('./allaRoutes');
var app 		= express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.send('Hej Gruppen!!!!!!');
});

// Bilar
app.get('/bilar', bil.visabilar);
app.get('/bilar/:id', bil.hittabilmedID);
app.put('/bilar/:id', bil.uppdaterabil);
app.post('bilar', bil.laggtillbil);
app.delete('/bilar/:id', bil.tabortbil);

// Kunder
app.get('/kunder', kund.visakunder);

app.get('/kunder', kund.visakunder);
app.get('/kunder/:namn', kund.hittaKundMedNamn);

app.post('/kunder', kund.laggTillKund);
app.put('/kunder', kund.uppdateraKund);
app.delete('/kunder', kund.taBortKund);



// Anställda
app.get('/anstallda', anstalld.visaanstallda);

// Skador
app.get('/skador', skada.visaskador);
app.get('/skador/:id', skada.hittaskadamedID);
app.put('/skador/:id', skada.uppdateraskada);
app.post('/skador', skada.laggtillskada);
app.delete('/skador/:id', skada.tabortskada);

// resevdel
app.get('/reservdelar', reservdel.visareservdelar);
app.get('/reservdelar/:id', reservdel.hittareservdelmedID);
app.put('/reservdelar/:id', reservdel.uppdaterareservdel);
app.post('/reservdelar', reservdel.laggtillreservdel);
app.delete('/reservdelar/:id', reservdel.tabortreservdel);

// Hela appen fångas upp här!
// API hantering & Routes kodas här... allaRoutes.js
iAm.WatchingYou(app);



var port = 3000;
app.listen(port, function() {
	console.log("Server startad på port : " + port);
});