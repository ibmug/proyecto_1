var map;
var service;
var infowindow;


var userLat;
var userLong;
console.log(navigator.geolocation);

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      //x.innerHTML = "Geolocation is not supported by this browser.";
      console.log("Geolocation is not supported in this browser");
    }
  }

  function showPosition(position) {
    $("#userPos").text("Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude);
  }



function initialize() {
  var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);


  ///Encontrar la manera de conseguir la latitud y longitud del usuario
  //Window
  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '500',
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

//Encontrar la manera de poder tomar el objeto que nos mandan
//Y hacer una lista de los lugares.
function callback(results, status) {
    console.log(results);
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}