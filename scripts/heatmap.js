function getHeatMap() {
    var resultCentre = results[0].geometry.location;

    // find bounds of grid
    var resultLatSouth = lat(resultCentre) - 0.001; // around 100 m south
    var resultLngWest = lng(resultCentre) - 0.001; // around 100 m west
    // we're getting an around 200x200 square, width of each grid cell is:
    var width = 0.001 / 10; 

    // getting 441 points using a grid
    var i, j; // rows, columns
    var a = 0;
    var newPoints;
    for (i = 0; i < 21; i++) {
        var lng = resultLngWest + (i * width);
        for (j = 0; j < 21; j++) {
            newPoints[a] = new google.maps.LatLng({
                lat: resultLatSouth + (j * width),
                lng: lng
            });
            ++a;
        }
    }

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: newPoints,
        map: map
    });
    heatmap.setMap(map);
}