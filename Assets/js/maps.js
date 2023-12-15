function iniciarMap() {
    var coord = {lat: -12.0579064,lng: -77.1088747};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    });

    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })

    map.addListener('zoom_changed', function() {
        var zoomLevel = map.getZoom();
        console.log('Nuevo nivel de zoom: ' + zoomLevel);
    });

    var infowindow = new google.maps.InfoWindow({
        content: "¡Instituto Simon Bolibar!"
    });
    
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    var circle = new google.maps.Circle({
        strokeColor: '#0000FF',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: coord,
        radius: 60 
    });
}