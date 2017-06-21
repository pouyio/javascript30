window.onload = () => {

  const bands = ['My Chemical Romance', 'The Anchor', 'We Came as Romans', 'I See Stars', 'Architects', 'Bring me the Horizon', 'Our Last Night', 'Enter Shikari', 'My Enemies & I', 'Saosin', 'Of Mice & Men'];

  const strip = (bandName) => bandName.replace(/^(a |the | my)/i, '').trim();

  const sortedBands = bands.sort((a,b) => ( strip(a) > strip(b))? 1: -1);

  document.querySelector('.bands').innerHTML = sortedBands.map(e => `<li>${e}</li>`).join('');

}
