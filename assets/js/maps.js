
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 43.593088,
            lng: -79.642260
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 43.630977, lng: -79.600829 },
        { lat: 43.539724, lng: -79.671663 },
        { lat: 43.575301, lng: -79.786549 },
        { lat: 43.580477, lng: -79.655386 },
        { lat: 43.506355, lng: -79.646865 },
        { lat: 43.584198, lng: -79.643113 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

