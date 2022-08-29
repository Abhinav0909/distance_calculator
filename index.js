function initMap() {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var india = new google.maps.LatLng(25.529383, 78.366613);
    handleInput();
    
    var mapOptions = {
        zoom: 5,
        center:india,
    }
    var map = new google.maps.Map(document.getElementById('map'),mapOptions);
    directionsRenderer.setMap(map);
    document.getElementById('calculator').addEventListener('click', calcRoute);


    function calcRoute() {
        var start = document.getElementById('address').value;
        var end = document.getElementById('address1').value;
        var request = {
            origin: start,
            destination: end,
            travelMode: 'DRIVING'
        };
        console.log(request)
        directionsService.route(request, function (result, status) {
            if (status == 'OK') {
                directionsRenderer.setDirections(result);
                console.log(result);
                document.getElementById('distance').innerHTML = result.routes[0].legs[0].distance.text;
            }
        });
    }
    function handleInput(){
            new google.maps.places.Autocomplete(document.getElementById('address'));
            new google.maps.places.Autocomplete(document.getElementById('address1'));
    }
}
