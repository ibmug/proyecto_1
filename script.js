
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
  console.log(valorABuscar);
});


/* =================================================================================== */

  /* Note: This example requires that you consent to location sharing when
   * prompted by your browser. If you see the error "Geolocation permission
   * denied.", it means you probably did not give permission for the browser * to locate you. */
  let pos;
  let map;
  let bounds;
  let infoWindow;
  let currentInfoWindow;
  let service;
  let infoPane;
  function initMap() {
    // Initialize variables
    bounds = new google.maps.LatLngBounds();
    infoWindow = new google.maps.InfoWindow;
    currentInfoWindow = infoWindow;
    /* Add a generic sidebar */
    infoPane = document.getElementById('panel');

    // Try HTML5 geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log(pos);
        map = new google.maps.Map(document.getElementById('map'), {
          center: pos,
          zoom: 15
        });
        console.log(map);
        bounds.extend(pos);

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);

        // Call Places Nearby Search on user's location
        getNearbyPlaces(pos);
      }, () => {
        // Browser supports geolocation, but user has denied permission
        handleLocationError(true, infoWindow);
      });
    } else {
      // Browser doesn't support geolocation
      handleLocationError(false, infoWindow);
    }
  }

  // Handle a geolocation error
  function handleLocationError(browserHasGeolocation, infoWindow) {
    // Set default location to Sydney, Australia
    pos = { lat: -33.856, lng: 151.215 };
    map = new google.maps.Map(document.getElementById('map'), {
      center: pos,
      zoom: 15
    });

    // Display an InfoWindow at the map center
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Geolocation permissions denied. Using default location.' :
      'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
    currentInfoWindow = infoWindow;

    // Call Places Nearby Search on the default location
    getNearbyPlaces(pos);
  }

  // Perform a Places Nearby Search Request
  function getNearbyPlaces(position) {
    let request = {
      location: position,
      rankBy: google.maps.places.RankBy.DISTANCE,
      keyword: 'restaurant'
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, nearbyCallback);
  }

  // Handle the results (up to 20) of the Nearby Search
  function nearbyCallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMarkers(results);
    }
  }

  // Set markers at the location of each place result
  function createMarkers(places) {
    places.forEach(place => {
      let marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        title: place.name
      });

      /* Add click listeners to the markers */
      // Add click listener to each marker
      google.maps.event.addListener(marker, 'click', () => {
        let request = {
          placeId: place.place_id,
          fields: ['name', 'formatted_address', 'geometry', 'rating',
            'website', 'photos']
        };

        /* Only fetch the details of a place when the user clicks on a marker.
         * If we fetch the details for all place results as soon as we get
         * the search response, we will hit API rate limits. */
        service.getDetails(request, (placeResult, status) => {
          showDetails(placeResult, marker, status)
        });
      });

      // Adjust the map bounds to include the location of this marker
      bounds.extend(place.geometry.location);
    });
    /* Once all the markers have been placed, adjust the bounds of the map to
     * show all the markers within the visible area. */
    map.fitBounds(bounds);
  }

  /* Show place details in an info window */
  // Builds an InfoWindow to display details above the marker
  function showDetails(placeResult, marker, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      let placeInfowindow = new google.maps.InfoWindow();
      let rating = "None";
      if (placeResult.rating) rating = placeResult.rating;
      placeInfowindow.setContent('<div><strong>' + placeResult.name +
        '</strong><br>' + 'Rating: ' + rating + '</div>');
      placeInfowindow.open(marker.map, marker);
      currentInfoWindow.close();
      currentInfoWindow = placeInfowindow;
      showPanel(placeResult);
    } else {
      console.log('showDetails failed: ' + status);
    }
  }

  /* Load place details in a sidebar */
  // Displays place details in a sidebar
  function showPanel(placeResult) {
    // If infoPane is already open, close it
    if (infoPane.classList.contains("open")) {
      infoPane.classList.remove("open");
    }

    // Clear the previous details
    while (infoPane.lastChild) {
      infoPane.removeChild(infoPane.lastChild);
    }

    /* Display a Place Photo with the Place Details */
    // Add the primary photo, if there is one
    if (placeResult.photos) {
      let firstPhoto = placeResult.photos[0];
      let photo = document.createElement('img');
      photo.classList.add('hero');
      photo.src = firstPhoto.getUrl();
      infoPane.appendChild(photo);
    }

    // Add place details with text formatting
    let name = document.createElement('h1');
    name.classList.add('place');
    name.textContent = placeResult.name;
    infoPane.appendChild(name);
    if (placeResult.rating) {
      let rating = document.createElement('p');
      rating.classList.add('details');
      rating.textContent = `Rating: ${placeResult.rating} \u272e`;
      infoPane.appendChild(rating);
    }
    let address = document.createElement('p');
    address.classList.add('details');
    address.textContent = placeResult.formatted_address;
    infoPane.appendChild(address);
    if (placeResult.website) {
      let websitePara = document.createElement('p');
      let websiteLink = document.createElement('a');
      let websiteUrl = document.createTextNode(placeResult.website);
      websiteLink.appendChild(websiteUrl);
      websiteLink.title = placeResult.website;
      websiteLink.href = placeResult.website;
      websitePara.appendChild(websiteLink);
      infoPane.appendChild(websitePara);
    }

    // Open the infoPane
    infoPane.classList.add("open");
  }

/*   initMap() */
