/*jshint esversion: 6 */
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const input = document.querySelector('.search');
const list = document.querySelector('.list');

(function() {
  fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

    input.addEventListener('change', drawMatches);
    input.addEventListener('keyup', drawMatches);
})();

function drawMatches() {
  const matches = findMatches(this.value, cities);
  const html = matches.map(city => {
    const regexp = new RegExp(this.value, 'gi');
    const myCity = city.city.replace(regexp, `<span class="hl">${this.value}</span>`);
    const myPlace = city.state.replace(regexp, `<span class="hl">${this.value}</span>`);

    return `<li>${myCity} - ${myPlace}</li>`;
  });
  list.innerHTML = html.join('');
}

function findMatches(word, cities) {
  return cities.filter(city => {
    const regexp = new RegExp(word, 'gi');
    return city.city.match(regexp) || city.state.match(regexp);
  });
}
