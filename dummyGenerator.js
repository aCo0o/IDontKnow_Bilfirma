module.exports = function() {
  modelArr = ["Volkswagen Gol G5","Volvo 66","VW GOLF -12","Volkswagen Passat B6","Volvo 264TE","Toyota Prius Aqua","BMW 327 -15","Volvo S60","Toyota Camry","Volkswagen Eos"," Peugeot 3008","Volvo 300-serien","Lincoln Town Car -66","Peugeot 1007","Peugeot 206 -00","Porsche 928 -08","Renault 5","Volvo 140 -55","Toyota Prius","Nissan Micra -88"];
  reservArr = "Front Right Outer door handle-Front Left Side Outer door handle-Rear Right Side Outer door handle-Rear Left Side Outer door handle-Front Right Side Inner door handle-Front Left Side Inner door handle-Rear Right Side Inner door handle-Rear Left Side Inner door handle-Back Door Outer Door Handle-Front Right Side Window motor-Front Left Side Window motor-Rear Right Side Window motor-Alternator bearing-Alternator bracket-Alternator fan-Rectifier-Regulator-Stater-Rotor-Polly-Diode & Plate Assembly-Rotor Assembly-Retainer-Housing-Carbon Brushes-Slip Rings-Coil-Voltage Regulator".split("-");
  priceArr = [149,259,289,349,399,459,499,549,599,659,699,759,799,859,899,959,999,1059,1099,1159,1199,1259,1299,1349,1399,1499,1549,1699,1799,1899,1999,1549,1649,1749,1849,1949];
  beskrArr = ["Regular Service","Regular Service","Regular Service","Regular Service","Broken headlight","Engine failure","Tire change","Collision damage","Collision damage","Broken windows","Filter change","Oil change","broken fuel-gauge","Needs new stereo","Needs windows tinted","Brake failure"," Needs wheel adjustment","Won't start","Wont stop","Needs painting on rear right-side"];
  nameArr = "Rafaela Borrego-Josefa Wiggins-Marivel Downer-Abraham Inskeep-Shelia Moad-Consuela Christner-Erich Mattei-Theda Huffstetler-Sherrill Defalco-Cinderella Dempsey-Ulysses Moton-Nathalie Harker-Leda Womac-Jackqueline Mcneil-Kasandra Knisely-Brianne Cantrelle-Chadwick Carrasco-Bettie Thomasson-Almeda Hilchey-Jenelle Chausse-Inger Canizales-Cassondra Treese-Herminia Blunk-Weldon Avants-Rupert Gard-Garnett Como-Alease Delmonte-Lue Vrba-Nereida Shadwick-Xuan Nygren-Manie Meadors-Almeta Peel-Benito Toms-Sonja Dy-Terina Younger-Juliana Bodine-Joey Keifer-Irina Grimaldi-Glennie Zimmermann-Alejandrina Cessna-Letitia Chancy-Tony South-Kieth Morissette-Berry Rappaport-Teresa Admire-Penney Heldt-Dayle Zamor-Xavier Nembhard-Dexter Browner-Diana Weintraub".split("-")
  numberArr = "(995) 605-1549-(981) 652-5696-(563) 146-7238-(948) 282-2787-(780) 892-7822-(789) 868-3333-(542) 853-3342-(474) 101-1910-(179) 823-6679-(100) 227-8412-(729) 722-0811-(368) 947-5456-(458) 315-9824-(682) 424-0051-(377) 974-0592-(548) 708-4299-(289) 915-5991-(769) 854-1567-(138) 743-2271-(371) 198-5115-(776) 763-1869-(513) 986-3565".split("-");
  regArr = ["ABC 123","DEF 345","GHI 456","JKL 567","MNO 678","PQR 789"," STU 890","VXY 012"," XYZ 123","KPG 856","HAM 041","AKF 222","YUA 621","AYH 999","GRA 666","NIT 333","FLY 696","TIO 337","HAL 239","OLA 753"];
  statusArr = ["Awaiting","Ongoing", "Finished"];
  semesterArr= ['{fran: "2016-12-25", till: "2017-01-08"}', '{fran: "2016-12-28", till: "2017-01-11"}','{fran: "2017-01-05", till: "2017-01-22"}','{fran: "2017-01-14", till: "2017-02-08"}','{fran: "2017-02-10", till: "2017-02-28"}','{fran: "2017-03-03", till: "2017-03-19"}','{fran: "2017-04-02", till: "2017-04-16"}','{fran: "2017-04-20", till: "2017-05-04"}','{fran: "2017-05-10", till: "2017-05-28"}','{fran: "2017-06-05", till: "2017-06-20"}','{fran: "2017-06-15", till: "2017-06-27"}','{fran: "2017-06-25", till: "2017-07-08"}','{fran: "2017-07-10", till: "2017-07-22"}','{fran: "2017-07-25", till: "2017-08-08"}','{fran: "2017-08-05", till: "2017-08-18"}','{fran: "2017-08-21", till: "2017-09-08"}', '{fran: "2017-09-05", till: "2017-09-18"}','{fran: "2017-09-20", till: "2017-10-08"}','{fran: "2017-10-10", till: "2017-10-22"}','{fran: "2016-10-25", till: "2017-11-12"}',]
  var enSemester = new m.modelssemester({
    fran: new Date("<2016-11-20>"), 
    till: new Date("<2016-11-27>")
  })
  enSemester.save(function(err){
    if(err){console.log(err)}  


    var enAnstalld = new m.modelsanstallda({
      namn: nameArr[Math.round(Math.random()*nameArr.length)],
      semester: enSemester._id
    })
    enAnstalld.save(function(err){
      if(err){console.log(err)}
      

      var enKund = new m.modelskunder({
        namn: nameArr[Math.round(Math.random()*nameArr.length)],
        tfn: numberArr[Math.round(Math.random()*numberArr.length)]
      }) 
      enKund.save(function(err){
        if(err){console.log(err)}


        var enSkada = new m.modelsskador({
          status: statusArr[Math.round(Math.random()*statusArr.length)],
          beskr: beskrArr[Math.round(Math.random()*beskrArr.length)],
          antalTim: Math.round(Math.random()*6),
          harArbetat: enAnstalld._id,
          kund: enKund._id,
        })
        enSkada.save(function(err){
          if(err){console.log(err)}

          var enReserv = new m.modelsreservdelar({
            namn: reservArr[Math.round(Math.random()*reservArr.length)],
            pris: priceArr[Math.round(Math.random()*priceArr.length)],
            skada: enSkada._id
          })
          enReserv.save(function(err){
            if(err){console.log(err)}


            var enBil = m.modelsbilar({
              model: modelArr[Math.round(Math.random()*modelArr.length)],
              regnum: regArr[Math.round(Math.random()*regArr.length)],
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
};

