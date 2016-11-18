'use strict';
var s = g.settings;

module.exports = class REST {
  constructor(express) {
    this.settings = s.REST;
    this.DB = new g.classes.DB(); // DB connection & models
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

  error(err, res) {
    res.status(400);
    res.json(err);
  }
};