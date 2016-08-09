var map = L.map('slippy-map', {"scrollWheelZoom" : false}).setView(["38.5", "-81"], 6);

var baselayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>' }).addTo(map);

var forestLayer = L.tileLayer.wms("https://www.sciencebase.gov/arcgis/services/Catalog/57360f08e4b0dae0d5df6cb0/MapServer/WMSServer?", {
  layers: "0",
  transparent: true,
  format: "image/png"
}).addTo(map);

var urbanLayer = L.tileLayer.wms("https://www.sciencebase.gov/arcgis/services/Catalog/57489ad6e4b07e28b664dd24/MapServer/WMSServer??", {
  layers: "0",
  transparent: true,
  format: "image/png"
});

function forestClick (e) {
  var forestElem = document.getElementById("forest");
  if (forestElem.className !== "selected") {
    forestElem.className = "selected";
    document.getElementById("urban").className = "";
    if (!map.hasLayer(forestLayer)) {
      map.addLayer(forestLayer);
    }
    if (map.hasLayer(urbanLayer)) {
      map.removeLayer(urbanLayer);
    }
  }
}

function urbanClick (e) {
  var urbanElem = document.getElementById("urban");
  if (urbanElem.className !== "selected") {
    urbanElem.className = "selected";
    document.getElementById("forest").className = "";
    if (map.hasLayer(forestLayer)) {
      map.removeLayer(forestLayer);
    }
    if (!map.hasLayer(urbanLayer)) {
      map.addLayer(urbanLayer);
    }
  }
}

document.getElementById("forest").addEventListener("click", forestClick);
document.getElementById("urban").addEventListener("click", urbanClick);
