var express = require('express');
var app = express();

app.get('*',function (req,res) {
	console.log("Hejsan...");
	res.send("Hej gruppen!!!");
})

app.listen(3000)
console.log("Server startad på port 3000");