'use strict';
var s = g.settings;

module.exports = class REST {
  constructor(express) {
    this.settings = s.REST;
    this.DB = new g.classes.DB(); // DB connection & models
    this.SQL =  new g.classes.sql();
    this.app = express;

    this.router();
  }

  // setup standard CRUD for route
  router() {
    var me = this;
    this.app.all(this.settings.route, function(req, res) {
      if(req.params.model == "ny"){
        m.dummyGenerator();
        res.json({"OK": "Ett objekt har blivit skapad och skickat till databas"});
      }

      else{

        // använd sql DB
        if(req.params.databas == "sql"){
          
          var method = req.method+"sql";
          var params = req.params.modelid || {};
          var model = req.params.model;
 
          return me[method](req.params.modelid,req.params.model,req,res);

        }// Eller MongoDB
        if(req.params.databas == "mongo"){
          /*return res.json({"OK": "Kopplar till MONGO "});*/


            var model = me.DB.getModel(req.params.model);
            
            if (!me[req.method] || !model) {
              res.sendStatus(404);
              res.end();
              return;
            }

            // combine any data sent in the request body with
            // any data sent in the request URL
            var params = req.body || {};
            params.model = req.params.model;
            if (req.params.modelid) {
              params.modelID = req.params.modelid;
            }

            me[req.method](model, params, req, res);

          }



      }
    });
  }

  // CREATE
  POST(model, params, req, res) {
    var me = this,
        toSave = new model(params); // new model instance with data
      
    // write data to DB
    toSave.save(function(err, result) {
      if (err) { me.error(err, res); return; }
      res.json(result); // respond with result
    });

    
  }

  // READ
  GET(model, params, req, res) {
    
    var me = this,
        func = params.modelID ? 'findById' : 'find',
        q = params.modelID ? params.modelID : {};

    // call the query function (find || findById)
    model[func](q, function(err, result) {
      if (err) { me.error(err, res); return; }
      // respond with result
    }).populate("kund").populate("skada").populate("harArbetat").populate("semester").exec(function(err,results){
      if(err){console.log(err)}
        res.json(results)
    })

   
  }

  // UPDATE
  PUT(model, params, req, res) {
    if (!params.modelID) { this.error({error: 'Missing ID!'}, res); return; }

    var me = this;
    model.findByIdAndUpdate(params.modelID, params, {new: true}, function (err, result) {
      if (err) { me.error(err, res); return; }
      res.json(result); // respond with result
    });

  }

  // DELETE
  DELETE(model, params, req, res) {
    if (!params.modelID) { this.error({error: 'Missing ID!'}, res); return; }

    var me = this;
    model.findByIdAndRemove(params.modelID, function(err, result) {
      if (err) { me.error(err, res); return; }
      res.json(true); // respond with result
    });

  }


  GETsql(id,model,req,res){
    console.log(id)
    if(!id)  {
      this.SQL.query("SELECT * FROM "+model,function(err,response){
        if(err) res.send("ERROR: " + err);
        else{
          console.log("GET - MySQL Resultat:",response);
          res.json(response);
        } 
      });
    }else {
      this.SQL.query("SELECT * FROM "+model+" WHERE id = "+id ,function(err,response){
        if(err) res.send("ERROR: " + err);
        else{
          console.log("GET - MySQL Resultat:",response);
          res.json(response);
        } 
      });
    }
     

/*



    if(JSON.stringify(params) == {}){
      // Get Allt på SQL
      this.SQL.query("SELECT * FROM "+model,function(err,response){
        if(err) res.send("ERROR: " + err);
        else{
          console.log("GET - MySQL Resultat:",response);
          res.json(response);
        } 
      });
    }else{
      // Get Allt på SQL
    this.SQL.query("SELECT * FROM "+model+ " WHERE id = " + params,function(err,response){
      if(err) res.send("ERROR: " + err);
      else{
        console.log("GET - MySQL Resultat:",response);
        res.send(response);
      } 
    });
    }
*/
    
  }

  POSTsql(id,model,req,res){

    // INSERT på SQL
    this.SQL.query("INSERT INTO "+model+" SET ?",req.body,function(err,response){
      if(err) console.log("ERROR",err);
      else {
          console.log("GET - MySQL Resultat:",response);
          res.send(response);
      }
    });

  }
  PUTsql(id,model,req,res){
    // UPDATE på SQL
    this.SQL.query("UPDATE "+model+" SET ? WHERE id = ?",[ req.body, id] ,function(err,response){
      if(err) console.log("ERROR",err);
      else {
        console.log("UPDATE - MySQL Resultat:",response);
        res.send(response);
      }

    });

  }
  DELETEsql(id,model,req,res){

    // DELETE på SQL

    this.SQL.query("DELETE FROM "+model+" WHERE id = ?",id ,function(err,response){
      if(err) console.log("ERROR",err);
      else {
        console.log("DELETE - MySQL Resultat:",response);
        res.send(response);
      }
    });
    
  }

  error(err, res) {
    res.status(400);
    res.json(err);
  }
};