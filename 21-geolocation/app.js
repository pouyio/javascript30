const arrow = document.querySelector(".arrow");
const latitude = document.querySelector(".latitude");
const longitude = document.querySelector(".longitude");
const altitude = document.querySelector(".altitude");

navigator.geolocation.watchPosition(
  data => {
    console.log(data.coords);
    latitude.textContent = data.coords.latitude;
    longitude.textContent = data.coords.longitude;
    altitude.textContent = data.coords.altitude;
    arrow.style.transform = `transform: rotate(${data.coords.heading})`;
  },
  e => window.alert("Let me use your sensors first")
);
