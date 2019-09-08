//jshint esversion:6
function myMap() {

  //new map
var mapProp= {
  center:new google.maps.LatLng(39.954699,-75.193448),
  zoom:15,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

/* ADD SINGLE MARKER

var marker = new google.maps.Marker({
  position: {lat: 39.954699, lng: -75.1934500}, 
  map: map
});
var infowindow = new google.maps.InfoWindow({
  content: "<h1> Hello</h1>"
});
marker.addListener('click', function(){
  infowindow.open(map, marker);
});
*/

//Add Marker Function
function addMarker(coordinates, descrip){
  var marker = new google.maps.Marker({
  position: coordinates,
  map: map,
  });

  var infowindow = new google.maps.InfoWindow({
    content: `<h4> ${descrip} </h4>`
  });
  marker.addListener('mouseover', function(){
    infowindow.open(map, marker);
  });
  }


//Adding individual markers with descriptions
addMarker({lat: 39.950, lng: -75.193}, "Pop-up farmer's market");
addMarker({lat: 39.954, lng: -75.195}, "Pride Parade Start Point");
addMarker({lat: 39.953, lng: -75.192}, "Pop-up botique shop ");
addMarker({lat: 39.954, lng: -75.193}, "Pop-up farmer's market");
addMarker({lat: 39.956, lng: -75.193}, "School Club Fundraiser");
addMarker({lat: 39.952, lng: -75.191}, "Mexican Street Tacos Food Truck");
addMarker({lat: 39.955, lng: -75.190}, "Street Musician");                                                                                                                                                                                                                                                                    
addMarker({lat: 39.958, lng: -75.193}, "Street Musician");
addMarker({lat: 39.957, lng: -75.194}, "Asian Fusion Food Truck");
addMarker({lat: 39.959, lng: -75.198}, "Free Public Concert");

}

