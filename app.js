var express = require('express');
var app = express();
var log = console.log;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bil = require('./controllers/bil.js');
var kund = require('./controllers/kund.js');
var anstalld = require('./controllers/anstalld.js');
var port = 3000;


app.get('/', function (req, res) {
    res.send('Hej Gruppen!!!');
});

// Bilar
app.get('/bilar', bil.visabilar);


// Kunder
app.get('/kunder', kund.visakunder);

// Anstäälda
app.get('/anstallda', anstalld.visaanstallda);

app.listen(port, function() {
console.log("Server startad på port : " + port);
});