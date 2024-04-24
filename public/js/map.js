//  ---------- Showing Map -----------
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  // style: "mapbox://styles/mapbox/satellite-streets-v12", // style URL
  style: "mapbox://styles/mapbox/streets-v12", // style URL 2
  center: listing.geometry.coordinates, // starting position [longitude, latitude]
  zoom: 8, // starting zoom
});

// console.log(coordinates);

const marker = new mapboxgl.Marker({ color: "red", rotation: 0 })
.setLngLat(listing.geometry.coordinates)
.setPopup(new mapboxgl.Popup({offset: 30 })
.setHTML(`<h4> ${listing.title} </h4> 
<p> Exact Location will be provided after booking </p>`))
.addTo(map);
