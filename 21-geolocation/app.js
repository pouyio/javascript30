const latitude = document.querySelector(".latitude");
const longitude = document.querySelector(".longitude");
const altitude = document.querySelector(".altitude");

navigator.geolocation.watchPosition(
  data => {
    latitude.textContent = data.coords.latitude;
    longitude.textContent = data.coords.longitude;
    altitude.textContent = data.coords.altitude || "? ";
  },
  e => window.alert("Let me use your sensors first")
);
