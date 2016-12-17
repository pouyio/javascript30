/*jshint esversion: 6 */

(function() {
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => panel.addEventListener('click', toggleOpen));
})();

function toggleOpen() {
  const opened = document.querySelectorAll('.open');

  if(opened.length) {
    opened.forEach(open => {
      open.classList.remove('open');
      open.classList.remove('open-active');
    });
  }

  this.classList.toggle('open');
  this.classList.toggle('open-active');
}
