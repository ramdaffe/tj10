$(function() {
    
    // Setup leaflet map
    var map = new L.Map('map');

    var basemapLayer = new L.TileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png',{attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution">CARTO</a>'});

    // Center map and default zoom level
    map.setView([ -6.19119,106.76892], 13);

    // Adds the background layer to the map
    map.addLayer(basemapLayer);

    // =====================================================
    // =============== Playback ============================
    // =====================================================
var busIcon = L.icon({
    iconUrl: 'marker.png',

    iconSize:     [8, 8], // size of the icon
    iconAnchor:   [4, 4], // point of the icon which will correspond to marker's location
});
    // Playback options
    var playbackOptions = {
        playControl: true,
        dateControl: false,
        sliderControl: true,
        tickLen: 1,
        speed: 0.5,
        marker: function(){
            return {
                icon: busIcon
            };
        }    
    }
        
    // Initialize playback
    var playback = new L.Playback(map, fc, null, playbackOptions);   
});
