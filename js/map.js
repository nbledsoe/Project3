function initMap(){
  var el = document.getElementById('map');
  var iit = new google.maps.LatLng(41.8349,87.6270);
  var crete = new google.maps.LatLng(41.4445,87.6314);
//map setting parameters
  var mapOptions = {
    center: new google.maps.LatLng(41.6573,87.6800),
    zoom: 20,
  };
  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: iit,
    map: myMap,
    animation:google.maps.Animation.BOUNCE,
  });

  var marker1 = new google.maps.Marker({
    position: crete,
    map: myMap,
    animation:google.maps.Animation.BOUNCE,
  });

}
