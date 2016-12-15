/*jshint esversion: 6 */

(function() {
  const inputs = document.querySelectorAll('.control input');

  inputs.forEach(input => {
    input.addEventListener('change',handle);
    input.addEventListener('mousemove',handle);
  });
})();

function handle(e) {
  const suffix = this.dataset.unit || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
