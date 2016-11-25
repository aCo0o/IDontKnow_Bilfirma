//var db = require('mysql');

module.exports = class DbConnection {
	
	constructor() {

		this.connect();
	}

	connect() {

		this.connection = m.mysql.createConnection({
			host     : '127.0.0.1',
			port	 : '3306',
			user     : 'root',
			password : 'storBIL123',
			database : 'bilverkstad',
			timezone: 'utc',
			dateStrings: true,
			bigNumberStrings: true,
			supportBigNumbers: true
		});

		this.connection.connect(function(err) {
		    if (err){ 
				//throw err; 
			    	console.log("Kunde inte ansluta till MySQL");
			}
			else{
				console.log("Ansuten till Sql DB");
				//connection.end();
			};
		});

	}

	query(sql,params,callback){
		this.connection.query(sql,params,callback);
	}



}
