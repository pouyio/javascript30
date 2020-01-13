const voice = document.querySelector('[name="voice"]');
const text = document.querySelector('[name="speech"]');
let voices = [];

const msg = new SpeechSynthesisUtterance();
msg.text = text.value;

function populateVoices() {
  voices = this.getVoices();

  voice.innerHTML = voices
    .map(v => `<option value="${v.name}">${v.name} - ${v.lang}</option>`)
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
speechSynthesis.addEventListener("voiceschanged", populateVoices);
