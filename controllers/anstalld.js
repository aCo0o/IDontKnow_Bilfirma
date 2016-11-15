var anstallda = [
 {"namn": "Aleksandar Cincarevic", "semester": "2016/05/28-2016/06/21", "bil": ""},
{"namn": "Sara Baqer", "semester": "2016/06/10-2016/06/21", "bil": ""},
{"namn": "Sumeja Cerkezi", "semester": "2016/07/15-2016/08/2", "bil": ""},
{"namn": "Hamza Mahmoud", "semester": "2016/04/28-2016/05/15", "bil": ""},
{"namn": "Marko Bijelic", "semester": "2016/09/3-2016/09/21", "bil": ""},
{"namn": "Anders Månsson", "semester": "2016/12/18-2016/12/31", "bil": ""}
];

exports.visaanstallda = function(req,res){
      //console.log(anstallda)
      res.send(anstallda);
    };