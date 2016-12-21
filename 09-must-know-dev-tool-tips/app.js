/*jshint esversion: 6 */

(function() {
  // regular
  console.log('Hello');

  // interpolated
  console.log('Hello %s', 'visitor');

  // styled
  console.log('%cHello!', 'font-size: 1.5rem;');

  // info
  console.info('Hello!');

  // warn
  console.warn('Hello!');

  // error
  console.error('Hello!');

  // testing
  console.assert(1===2, 'that is not true');

  // DOM elements
  const p = document.querySelector('p');
  console.dir(p);

  // grouping
  const dogs = [{name: 'First', age:'4'},{name: 'Second', age:'6'},{name: 'Third', age:'8'}];
  dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`Name: ${dog.name}`);
    console.log(`Age: ${dog.age}`);
    console.groupEnd(`${dog.name}`);
  });

  // counting
  console.count('times');
  console.count('times');
  console.count('another');
  console.count('times');
  console.count('times');
  console.count('another');
  console.count('times');
  console.count('times');
  console.count('another');

  // timing
  console.time('fetching data');
  fetch('https://api.github.com/users/pouyio')
    .then(data => data.json())
    .then(data => console.timeEnd('fetching data'));

  // Table
  console.table(dogs);
})();
