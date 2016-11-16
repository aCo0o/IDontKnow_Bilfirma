var express 	= require('express');
var bodyParser 	= require('body-parser');
var iAm 		= require('./allaRoutes');
var app 		= express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Hela appen fångas upp här!
// API hantering & Routes kodas här... allaRoutes.js
iAm.WatchingYou(app);


var port = 3000;
app.listen(port, function() {
	console.log("Server startad på port : " + port);
});