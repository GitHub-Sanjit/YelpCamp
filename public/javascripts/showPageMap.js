mapboxgl.accessToken = mapToken;
// ("pk.eyJ1Ijoic2Fuaml0bWFwYm94IiwiYSI6ImNsMjFqbHhmbzA1dTUzYm8xeTBwcTlrbnMifQ.60o_vri1H53dE81kflAj5w");
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
});
