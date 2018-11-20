function initMap(){
  var el = document.getElementById('map');
  var crete = new google.maps.LatLng(41.4445,87.6314);
//map setting parameters
  var mapOptions = {
    center: crete,
    zoom: 8,
  };
  var myMap = new google.maps.Map(el, mapOptions);

  var marker1 = new google.maps.Marker({
    position: crete;
    map: myMap;
    animation:google.maps.Animation.BOUNCE,
  });

}
