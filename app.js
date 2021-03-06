// globals
m = {}; // all modules
g = {}; // all global variables (ex. settings)

// Require modules
[
  "express",
  "express-session",
  "compression",
  "path",
  "fs",
  "serve-favicon",
  "cookie-parser",
  "body-parser",
  "gulp",
  "gulp-less",
  "gulp-clean-css",
  "mongoose",
  "mysql",
  "./models/anstallda",
  "./models/bilar",
  "./models/kunder",
  "./models/reservdelar",
  "./models/semester",
  "./models/skador",
  "./dummyGenerator",
  "./settingsConstr",
  "./classLoader"
].forEach(function(x){
  // store required modules in "m"
  m[x.replace(/\W/g,'')] = require(x);
});

//console.log("All loaded modules", Object.keys(m));

// constructs g.settings object
m.settingsConstr();
// loads all classes
m.classLoader();

//console.log("All loaded classes", Object.keys(g.classes));






// connect to mongoDB
new g.classes.DB();
//Connect to MySQL
/*g.dbinstance = new g.classes.sql();*/



// start LessWatch
new g.classes.LessWatch();
// start express server
new g.classes.Server();




// Usage anywhere:
// g.dbinstance.connection("SQL",[params]);



// TestQuery
/*g.dbinstance.query("SELECT * FROM people WHERE id = ?",[1],function(err,response){
  console.log("ERROR",err);
  console.log("Query Resultat:",response);
});*/