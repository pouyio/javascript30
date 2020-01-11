const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed");

navigator.geolocation.watchPosition(
  data => {
    speed.textContent = data.coords.speed;
    arrow.style.transform = `transform: rotate(${data.coords.heading})`;
  },
  e => window.alert("Let me use your sensors first")
);
