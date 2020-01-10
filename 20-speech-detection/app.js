const words = document.querySelector(".words");

const recognition = new webkitSpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");
words.appendChild(p);

recognition.addEventListener("result", e => {
  const transcript = Array.from(e.results)
    .map(r => r[0].transcript)
    .join("");
  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
});

recognition.addEventListener("end", recognition.start);

recognition.start();
