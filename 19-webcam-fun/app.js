const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const takePic = document.querySelector(".takePicture");
const pictures = document.querySelector(".pictures");
const ctx = canvas.getContext("2d");

let currentEffect = "";

const getVideo = () => {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(m => {
    video.srcObject = m;
    video.play();
  });
};

const paintToCanvas = () => {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    if (currentEffect) {
      let pixels = ctx.getImageData(0, 0, width, height);
      pixels = currentEffect === "rgb" ? rgbShift(pixels) : redShift(pixels);
      ctx.putImageData(pixels, 0, 0);
    }
  }, 16);
};

getVideo();

const setEffect = mode => {
  currentEffect = mode;
};

const redShift = pixels => {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100;
    pixels.data[i + 1] = pixels.data[i + 1] - 50;
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
  }
  return pixels;
};

const rgbShift = pixels => {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0];
    pixels.data[i + 200] = pixels.data[i + 1];
    pixels.data[i - 250] = pixels.data[i + 2];
  }
  return pixels;
};

const takePicture = () => {
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", `${new Date().toISOString()}.jpeg`);
  link.textContent = "Download picture";
  link.innerHTML = `<img src="${data}" alt="picture"/>`;
  pictures.appendChild(link);
};

video.addEventListener("canplay", paintToCanvas);
