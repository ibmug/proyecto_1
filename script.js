
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

// for(var delegacion in municipios){
//   llamadoACovidAmbulatorios(municipios[delegacion].name);
//   llamadoACovidHosp(municipios[delegacion].name);
// }
var hospTotal;
var ambsTotal;


function calculaPorcentaje(poblacion){
  //por el momento tengo que llamar esta funcion en el segundo llamado.
  var pobTotDel = poblacion;
  var porcentaje = ((hospTotal+ambsTotal) * 100) / pobTotDel;
  console.log("Poblacion es: "+pobTotDel);
  console.log("hospTotal es: " + hospTotal);
  console.log("Ambs total es: "+ ambsTotal);
  //console.log(pobTotDel);
  return porcentaje;
  
}



function llamadoACovidHosp(searchVal) {
  try{

    var URL = "https://datos.cdmx.gob.mx/api/records/1.0/search/?dataset=casos-asociados-a-covid-19"
    var q = "&q=";
    var searchValue = searchVal;
    var refine = "&refine.tipo_paciente=HOSPITALIZADO"
    var queryURL = URL+q+searchValue+refine;

      jQuery.ajax({
          url:queryURL,

          beforeSend: function(){
              //before send this method will be called
          },
          success: function(data) {
              //when response recieved then this method will be called.
          },
          complete: function(response){
              //after completed request then this method will be called.
                    //console.log(response);
                    $("#casosHospitalizados").text(response.responseJSON.nhits + " Casos Hospitalizados en "+ response.responseJSON.parameters.q);
                    hospTotal = response.responseJSON.nhits;
                    for(var delegacion in municipios){
                        if(municipios[delegacion].name === response.responseJSON.parameters.q){
                        //console.log("Encontramos la pob");
                        var percent = calculaPorcentaje(municipios[delegacion].pob);
                        console.log("Hay un "+percent+"% de ciudadanos que viven en "+municipios[delegacion].name+" contagiados");
                        }

                    }
          },
          error: function(){
              //when error occurs then this method will be called.
          }
      });
  }catch (e) {
      alert(e);
  }
}





function llamadoACovidAmbulatorios(searchVal){

  var URL = "https://datos.cdmx.gob.mx/api/records/1.0/search/?dataset=casos-asociados-a-covid-19"
  var q = "&q=";
  var searchValue = searchVal;
  var refine = "&refine.tipo_paciente=AMBULATORIO"
  var queryURL = URL+q+searchValue+refine;
  console.log(searchVal);
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    //console.log(response);
    console.log(response.nhits);
    $("#casosAmbulatorios").text(response.nhits + " Casos Ambulatorios en "+ response.parameters.q);
    ambsTotal =  response.nhits;
  
  });
}



function procesarSearch(valorABuscar){
  llamadoACovidAmbulatorios(valorABuscar);
  llamadoACovidHosp(valorABuscar);
}




$("#search-loc").on("click", function(event) {
  event.preventDefault();
  var valorABuscar = $("#search-input").val();
  //console.log(valorABuscar);
  procesarSearch(valorABuscar.toLowerCase());
});
