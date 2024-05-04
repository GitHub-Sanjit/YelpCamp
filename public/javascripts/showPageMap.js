// const campground = require("../../models/campground");

mapboxgl.accessToken = mapToken;
// ("pk.eyJ1Ijoic2Fuaml0bWFwYm94IiwiYSI6ImNsMjFqbHhmbzA1dTUzYm8xeTBwcTlrbnMifQ.60o_vri1H53dE81kflAj5w");
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: campground.geometry.coordinates,
  zoom: 9, // starting zoom
});
map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
  .setLngLat(campground.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h3>${campground.title}</h3><p>${campground.location}</p>`
    )
  )
  .addTo(map);
