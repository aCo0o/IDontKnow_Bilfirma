module.exports = function() {
  modelArr = ["Mercedes Benz A2","Toyota Carrila -00","VW GOLF -12","Mercedes Benz E100 -16","Alfa Romeo 75","Audi A4 -99","BMW 327 -15","Bugatti EB110 -14","Chevrolet Opala -11","Jaguar XK -09","Jeep Wrangler -02","Lamborghini Urraco 03","Lincoln Town Car -66","Opel Corsa -87","Peugeot 206 -00","Porsche 928 -08","Renault 5 -06","Volvo 140 -55","Toyota Prius -14","Nissan Micra -88"];
  reservArr = "Front Right Outer door handle-Front Left Side Outer door handle-Rear Right Side Outer door handle-Rear Left Side Outer door handle-Front Right Side Inner door handle-Front Left Side Inner door handle-Rear Right Side Inner door handle-Rear Left Side Inner door handle-Back Door Outer Door Handle-Front Right Side Window motor-Front Left Side Window motor-Rear Right Side Window motor-Alternator bearing-Alternator bracket-Alternator fan-Rectifier-Regulator-Stater-Rotor-Polly-Diode & Plate Assembly-Rotor Assembly-Retainer-Housing-Carbon Brushes-Slip Rings-Coil-Voltage Regulator".split("-");
  priceArr = [149,299,249,349,399,449,499,549,599,649,699,749,799,849,899,949,999,1099,1049,1149,1199,1249,1299,1349,1399,1499,1549,1699,1799,1899,1999,1549,1649,1749,1849,1949];
  beskrArr = ["Regular Service","Regular Service","Regular Service","Regular Service","Broken headlight","Engine failure","Tire change","Collision damage","Collision damage","Broken windows","Filter change","Oil change","broken fuel-gauge","Needs new stereo","Needs windows tinted","Brake failure"," Needs wheel adjustment","Won't start","Wont stop","Needs painting on rear right-side"];
  nameArr = "Rafaela Borrego-Josefa Wiggins-Marivel Downer-Abraham Inskeep-Shelia Moad-Consuela Christner-Erich Mattei-Theda Huffstetler-Sherrill Defalco-Cinderella Dempsey-Ulysses Moton-Nathalie Harker-Leda Womac-Jackqueline Mcneil-Kasandra Knisely-Brianne Cantrelle-Chadwick Carrasco-Bettie Thomasson-Almeda Hilchey-Jenelle Chausse-Inger Canizales-Cassondra Treese-Herminia Blunk-Weldon Avants-Rupert Gard-Garnett Como-Alease Delmonte-Lue Vrba-Nereida Shadwick-Xuan Nygren-Manie Meadors-Almeta Peel-Benito Toms-Sonja Dy-Terina Younger-Juliana Bodine-Joey Keifer-Irina Grimaldi-Glennie Zimmermann-Alejandrina Cessna-Letitia Chancy-Tony South-Kieth Morissette-Berry Rappaport-Teresa Admire-Penney Heldt-Dayle Zamor-Xavier Nembhard-Dexter Browner-Diana Weintraub".split("-")
  numberArr = "(995) 605-1549-(981) 652-5696-(563) 146-7238-(948) 282-2787-(780) 892-7822-(789) 868-3333-(542) 853-3342-(474) 101-1910-(179) 823-6679-(100) 227-8412-(729) 722-0811-(368) 947-5456-(458) 315-9824-(682) 424-0051-(377) 974-0592-(548) 708-4299-(289) 915-5991-(769) 854-1567-(138) 743-2271-(371) 198-5115-(776) 763-1869-(513) 986-3565".split("-");
  regArr = ["ABC 123","DEF 345","GHI 456","JKL 567","MNO 678","PQR 789"," STU 890","VXY 012"," XYZ 123","KPG 856","HAM 041","AKF 222","YUA 621","AYH 999","GRA 666","NIT 333","FLY 696","TIO 337","HAL 239","OLA 753"];
  statusArr = ["Awaiting","Ongoing", "Finished"];

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

