// var map;
// var service;
// var infowindow;

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };


// var userLat;
// var userLong;
// console.log(navigator.geolocation);

// function getLocation() {
//     console.log("GetLocation");
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition,error,options);
//     } else {
//       //x.innerHTML = "Geolocation is not supported by this browser.";
//       console.log("Geolocation is not supported in this browser");
//     }
//   }

//   function showPosition(position) {
//     $("#userPos").text("Latitude: " + position.coords.latitude + 
//     "Longitude: " + position.coords.longitude);
//     userLat = position.coords.latitude;
//     console.log(userLat);
//     console.log(position.coords.accuracy);
//     userLong = position.coords.longitude;

//   }

//   function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//   }



// function initMap() {
//  // var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);
//  console.log("InitMap");
//  console.log(userLat);
//  console.log(userLong);
//  var userMapLocation = new google.maps.LatLng(userLat,userLong);


//   ///Encontrar la manera de conseguir la latitud y longitud del usuario
//   //Window
//   map = new google.maps.Map(document.getElementById('map'), {
//       center: userMapLocation,
//       zoom: 15
//     });

//   var request = {
//     location: userMapLocation,
//     radius: '500',
//     type: ['restaurant']
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.nearbySearch(request, callback);
// }

// //Encontrar la manera de poder tomar el objeto que nos mandan
// //Y hacer una lista de los lugares.
// function callback(results, status) {
//     console.log(results);
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       createMarker(results[i]);
//     }
//   }
// }
// getLocation();