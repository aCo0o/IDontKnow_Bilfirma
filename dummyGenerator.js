module.exports = function() {

  modelArr = ["Volkswagen Gol G5","Volvo 66","VW GOLF -12","Volkswagen Passat B6","Volvo 264TE","Toyota Prius Aqua","BMW 327 -15","Volvo S60","Toyota Camry","Volkswagen Eos"," Peugeot 3008","Volvo 300-serien","Lincoln Town Car -66","Peugeot 1007","Peugeot 206 -00","Porsche 928 -08","Renault 5","Volvo 140 -55","Toyota Prius","Nissan Micra -88"];
  priceArr = [149,259,289,349,399,459,499,549,599,659,699,759,799,859,899,959,999,1059,1099,1159,1199,1259,1299,1349,1399,1499,1549,1699,1799,1899,1999,1549,1649,1749,1849,1949];
  semesterArr= ['{fran: "2016-12-25", till: "2017-01-08"}', '{fran: "2016-12-28", till: "2017-01-11"}','{fran: "2017-01-05", till: "2017-01-22"}','{fran: "2017-01-14", till: "2017-02-08"}','{fran: "2017-02-10", till: "2017-02-28"}','{fran: "2017-03-03", till: "2017-03-19"}','{fran: "2017-04-02", till: "2017-04-16"}','{fran: "2017-04-20", till: "2017-05-04"}','{fran: "2017-05-10", till: "2017-05-28"}','{fran: "2017-06-05", till: "2017-06-20"}','{fran: "2017-06-15", till: "2017-06-27"}','{fran: "2017-06-25", till: "2017-07-08"}','{fran: "2017-07-10", till: "2017-07-22"}','{fran: "2017-07-25", till: "2017-08-08"}','{fran: "2017-08-05", till: "2017-08-18"}','{fran: "2017-08-21", till: "2017-09-08"}', '{fran: "2017-09-05", till: "2017-09-18"}','{fran: "2017-09-20", till: "2017-10-08"}','{fran: "2017-10-10", till: "2017-10-22"}','{fran: "2016-10-25", till: "2017-11-12"}',]
  nameArr = " Erik Johansson Anna Andresson Karl Karlsson Elisabeth Nilsson Nils Olsson Birgitta Olsson Peter Hansson Sofia Hansson Elin Axelsson Johanna Lindström Åke Lindström Bo Lindberg Fredrik Carlsson Ingrid Petterson Mikael Svensson Markus Hellström Maja Linsson Anders Andersson Per Åkesson Malin Svensson Gullbritt Eliasson Johan Folk Andre Persson Alex Vikström Petter Andreasson Linus Petterson Jessica Månsson Noah Eliasson Patrik Patriksson Molly Sanden Melissa Jönsson Simon Eriksson Helena Olofsson Cecilia Lindgren Bo Magnusson Daniel Carlsson Carl Helgasson Malin Olofsson Andreas Pålsson Olof Jonsson Felicia Andresson Henrik Stålhammar Benjamin Nilsson Elvira Eliasson Nils Gullberg Petra Pettersson Alice Persson Linda Månsson Paul Tobiasson".split("-")
  numberArr = "(995) 605-1549-(981) 652-5696-(563) 146-7238-(948) 282-2787-(780) 892-7822-(789) 868-3333-(542) 853-3342-(474) 101-1910-(179) 823-6679-(100) 227-8412-(729) 722-0811-(368) 947-5456-(458) 315-9824-(682) 424-0051-(377) 974-0592-(548) 708-4299-(289) 915-5991-(769) 854-1567-(138) 743-2271-(371) 198-5115-(776) 763-1869-(513) 986-3565".split("-");
  regArr = ["ABC 123","DEF 345","GHI 456","JKL 567","MNO 678","PQR 789"," STU 890","VXY 012"," XYZ 123","KPG 856","HAM 041","AKF 222","YUA 621","AYH 999","GRA 666","NIT 333","FLY 696","TIO 337","HAL 239","OLA 753"];
  statusArr = ["Ej påbörjad", "Pågående", "Avslutad"];
  reservArr = ["Tanklock","Sidospegel","Filter", "Dragkrok", "Kontakter", "Motorvärmare","Belysning", "Drivlina", "Styrinrättning", "Bromssystem", "Avgas", "Framvagn", "Olja och Vätska", "Cikelhållare", "Stötdämpare och fjädring", "Hjullager", "Släp", "Vajer", "Värme och kyla", "Tändningsdelar", "Fjädring", "Spolning", "Torkarblad"]
  beskrArr = ["Parkeringsskada","Trafikolycka","Balansning","Elektrikfel","Däckbyte","Krossad Sidospegel", "Bränsleolymsregulator", "Avgaskamaxelläge", "Vevaxelläge", "Insugskam", "Turboladdare", "Värmarstyrkrets", "Värmemotstånd", "Laddluftkylaren", "Bränslesystem", "Luftflödeskrets", "Gasspjäll", "Sensor", "Cylinder"];

for(var i=0; i<10; i++){
  var enSemester = new m.modelssemester({
    fran: new Date("<2016-11-20>"), 
    till: new Date("<2016-11-27>")
  })
  enSemester.save(function(err){
    if(err){console.log(err)}  


    var enAnstalld = new m.modelsanstallda({
      namn: nameArr[Math.round(Math.random()*nameArr.length-1)],
      semester: enSemester._id
    })
    enAnstalld.save(function(err){
      if(err){console.log(err)}
      

      var enKund = new m.modelskunder({
        namn: nameArr[Math.round(Math.random()*nameArr.length-1)],
        tfn: numberArr[Math.round(Math.random()*numberArr.length-1)]
      }) 
      enKund.save(function(err){
        if(err){console.log(err)}


        var enSkada = new m.modelsskador({
          status: statusArr[Math.round(Math.random()*statusArr.length-1)],
          beskr: beskrArr[Math.round(Math.random()*beskrArr.length-1)],
          antalTim: Math.round(Math.random()*6),
          harArbetat: enAnstalld._id,
          kund: enKund._id,
        })
        enSkada.save(function(err){
          if(err){console.log(err)}

          var enReserv = new m.modelsreservdelar({
            namn: reservArr[Math.round(Math.random()*reservArr.length-2)],
            pris: priceArr[Math.round(Math.random()*priceArr.length-1)],
            skada: enSkada._id
          })
          enReserv.save(function(err){
            if(err){console.log(err)}


            var enBil = m.modelsbilar({
              model: modelArr[Math.round(Math.random()*modelArr.length)],
              regnum: regArr[Math.round(Math.random()*regArr.length-1)],
              kund: enKund._id,
              skada: enSkada._id,
            })
            enBil.save(function(err){
              if(err){console.log(err)}
            })// enBil
          })// enReserv
        }) // enSkada 
      }) // enKund
    }) // enAnstalld  
  }) // enSemester
}

};

