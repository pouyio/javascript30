const triggers = document.querySelectorAll("a");
const highlighter = document.createElement("span");
highlighter.classList.add("highlight");
document.body.append(highlighter);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    left: linkCoords.left + window.scrollX,
    top: linkCoords.top + window.scrollY
  };
  highlighter.style.width = `${coords.width}px`;
  highlighter.style.height = `${coords.height}px`;
  coords;
  highlighter.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => a.addEventListener("mouseenter", highlightLink));
