/* globals L */
import React from 'react';
import './App.css';

function App() {

  let map;

  setTimeout(() => {
    map = L.map('map').setView([60.010115, 30.404316], 33);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(map);
    const marker = L.marker([60.010115, 30.404316]).addTo(map);
    const circle = L.circle([60.010038, 30.403993], {
      color: '#f63',
      fillColor: '#f63',
      fillOpacity: .5,
      radius: 10
    }).addTo(map);
    const poly = L.polygon([
      [60.010038, 30.403993],
      [60.010576, 30.404962],
      [60.011013, 30.402409]
    ], {
      color: '#00a69366',
      fillColor: '#00a693',
      fillOpacity: .2
    }).addTo(map);
    map.on('click', handleClick);
    circle.bindPopup('<img src="https://sun9-26.userapi.com/c849328/v849328872/187f1f/hgzinmpCGjU.jpg" style="width:200px;height=auto;object-fit="cover">').openPopup();
  }, 500)

  function handleClick(e) {
    const coords = e.latlng;
    console.log(coords);
    const color = `#${Math.floor(Math.random()*255*255*255).toString(16)}`
    L.circle(coords, {
      color,
      fillColor: color,
      fillOpacity: .2
    }).addTo(map);
  };

  return (
    <div className="App">
      <div id="map" /* onClick={handleClick} */></div>
    </div>
  );
}

export default App;
