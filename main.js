// var map = L.map('map').setView([39.73, -104.99], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
//     maxZoom: 19,
//     attribution: '© http://www.openstreetmap.org/copyright'
// }).addTo(map);

// var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
//     denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
//     aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
//     golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

//     var cities = L.layerGroup([littleton, denver, aurora, golden]);

//     var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© http://www.openstreetmap.org/copyright'
// });

// var streets = L.tileLayer(mapboxUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

// var map = L.map('map', {
//     center: [39.73, -104.99],
//     zoom: 10,
//     layers: [osm, cities]
// });

// var baseMaps = {
//     "OpenStreetMap": osm,
//     "Mapbox Streets": streets
// };

// var overlayMaps = {
//     "Cities": cities
// };

// var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);






var streets = L.tileLayer(mapboxUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});
    var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

var cities = L.layerGroup([littleton, denver, aurora, golden]);
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});
var map = L.map('map', {
    
    center: [39.73, -104.99],
    zoom: 10,
    layers: [osm, cities]
});


