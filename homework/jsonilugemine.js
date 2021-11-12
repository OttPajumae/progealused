const content = 'Some content!'

fs.writeFile('C:/Users/opilane/Desktop/test', content, err => { // ESCAPE SÜMBOL "\", "=>" on teine viis kuidas funktsiooni kirjutada
  if (err) {    //Callback on alati funktsioon on ka nimi CALLBACK "() => {}"
    console.error(err) //Käivitub ainult siis kui faili tegemisel on mingi error, siis kirjutab selle välja 
    return
  }
  //file written successfully
})


fs.readFile('C:/Users/opilane/Desktop/test', 'UTF-8', (err,data) => {
    if(err) throw err;
    console.log("Minu fail "+data); // \n on uus rida
})

//kasutatakse JSON formaati 
fetch('https://google.com').then() //fetch on sünkroone, fetchi sees ei saa callbacki teha, vaid peab kirjutama .then()
//catch vaatab erroreit fetchi seest, mudu sama asi, mis then, .catch()  
//this tähendab tervet objectit, milles ta on 
//Kõiki neid nimetatakse "Promise"
//await teeb niimodi, et programm ootaks ära kui midagi kontrollitakse v mingt tulemust otsitakse 
//try teeb niimodi, et töötab edasi kui tekkib viga. Paneb errori kirja ja jätkab v saab ka katkestada koodi 

//NÄITE PROGRAMM, et  kuidas fetchiga lugeda Jsoni 

fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=51.5&lon=0') // võtab lehekülje
   .then(response => {
       if (!response.ok) {
           throw new Error("HTTP error " + response.status); // Miks see siin on? "Kui response ei ole õige, viska ette error?"
       }
       return response.json();
   })
   .then(json => { // see on funktsioon
       console.log(json);
       let andmedJ = json.properties.timeseries //Kõige suurem kast kust me võtame info 

       andmedJ.forEach(obj =>{ //viib meid väiksemate kastide juurde
            let temp = obj.data.instant.details.air_temperature //väiksemad kastis, kus me võtame info
            let date = obj.time 
            console.log(`${temp}`` ${date}`) //kirjutab väiksema kasti andmed 

       })
       /*foreach.temp(i=0; i < temp.length; i++){
          if (){}
        }*/
   })
   .catch (
     console.log("error")
   )
   //.catch(function () { //
       //console.log("error")
  
