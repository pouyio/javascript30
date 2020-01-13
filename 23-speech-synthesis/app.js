const voice = document.querySelector('[name="voice"]');
const text = document.querySelector('[name="speech"]');
let voices = [];

const msg = new SpeechSynthesisUtterance();
msg.text = text.value;

function populateVoices() {
  voices = speechSynthesis.getVoices().filter(v => v.lang === "es-ES");

  voice.innerHTML = voices
    .map(v => `<option value="${v.name}">${v.name} ${v.lang}</option>`)
    .join("");

  msg.voice = voices[0];
}

function setVoice() {
  msg.voice = voices.find(v => v.name === this.value);
}

function speak() {
  speechSynthesis.speak(msg);
}

text.addEventListener("change", e => (msg.text = e.target.value));
voice.addEventListener("change", setVoice);
if ("addEventListener" in speechSynthesis) {
  speechSynthesis.addEventListener("voiceschanged", populateVoices);
} else {
  populateVoices();
}
