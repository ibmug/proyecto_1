
var municipios = [{name:"benito juarez", pob:317999},
                 {name:"cuauhtemoc", pob: 415379},
                 {name:"miguel hidalgo", pob:302489},
                 {name:"venustiano carranza", pob: 370844},
                 {name:"alvaro obregon", pob:724491},
                 {name:"azcapotzalco", pob:376071},
                 {name:"coyoacan", pob: 575878},
                 {name: "cuajimalpa", pob: 214710},
                 {name:"gustavo a madero", pob: 1133065},
                 {name: "iztacalco", pob: 374476},
                 {name: "iztapalapa", pob: 2107798},
                 {name: "magdalena contreras", pob: 259934},
                 {name: "tlahuac", pob: 481680},
                 {name: "tlalpan", pob: 690364},
                 {name: "xochimilco", pob: 510101},
                 {name: "milpa alta", pob: 165619}
                ];



function llamadoACovid(searchVal){

  var URL = "https://datos.cdmx.gob.mx/api/records/1.0/search/?dataset=casos-asociados-a-covid-19"
  var q = "&q=";
  var searchValue = searchVal;
  var queryURL = URL+q+searchValue;
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response.nhits);
    //TIPO PACIENTE para ver si estan en hospital o no
    //Intubado para cuantos casos criticos
    //Si queremos refinar una busqueda:
    //&refine.tipo_paciente=HOSPITALIZADO
    //Mostrar una imagen O cambiar la letra por algo mas 'grafico'
    //Rojo ES CUIDADO, Naranja es quedate en casa,Amarillo es precaucion, Verde es bien.
    
    //Si nuestro 100% siempre va a ser municipios[index].pob
    //100*casos_covid/municipios[index].pob
    
    ///Porcentaje de peligro
    //Mostrar el mas peligroso
    //


    //Plus
    //Si esta en verde, sugerir lugares.
  
  });
}



function llamadoACovidHosp(searchVal){

  var URL = "https://datos.cdmx.gob.mx/api/records/1.0/search/?dataset=casos-asociados-a-covid-19"
  var q = "&q=";
  var searchValue = searchVal;
  var refine = "&refine.tipo_paciente=HOSPITALIZADO"
  var queryURL = URL+q+searchValue+refine;
  console.log(queryURL);
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response.nhits);
    $("#casosHospitalizados").text(response.nhits + " Casos Hospitalizados en "+ response.parameters.q);
    
  
  });
}


function llamadoACovidAmbulatorios(searchVal){

  var URL = "https://datos.cdmx.gob.mx/api/records/1.0/search/?dataset=casos-asociados-a-covid-19"
  var q = "&q=";
  var searchValue = searchVal;
  var refine = "&refine.tipo_paciente=AMBULATORIO"
  var queryURL = URL+q+searchValue+refine;
  console.log(queryURL);
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response.nhits);
    $("#casosAmbulatorios").text(response.nhits + " Casos Ambulatorios en "+ response.parameters.q);
   
  
  });
}



$("#search-loc").on("click", function(event) {
  event.preventDefault();
  var valorABuscar = $("#search-input").val();
  console.log(valorABuscar);
  //llamadoACovid(valorABuscar);
  llamadoACovidHosp(valorABuscar);
  llamadoACovidAmbulatorios(valorABuscar);
});