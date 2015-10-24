var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 12.829849, lng: -85.079287},
    zoom: 8
  });
}