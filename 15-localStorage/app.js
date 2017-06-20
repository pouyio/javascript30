window.onload = () => {

  const addCloud = document.querySelector('.add-clouds');
  const clearClouds = document.querySelector('.clear-clouds');
  const cloudList = document.querySelector('.clouds');
  let clouds = JSON.parse(localStorage.getItem('clouds')) || [];

  function addCloudEvent(e) {
      e.preventDefault();
      const text = (this.querySelector('[name=cloud]')).value;
      const cloud = {
        text,
        done: false
      }
      clouds.push(cloud);
      populateList(clouds, cloudList);
      localStorage.setItem('clouds', JSON.stringify(clouds));
      this.reset();
  }

  function populateList(clouds = [], cloudList) {
    cloudList.innerHTML = clouds.map((cloud, i) => {
      return `<li>
        <input type="checkbox" id="item${i}" data-id="${i}" ${cloud.done? 'checked': ''}></input>
        <label for="item${i}">${cloud.text}</label>
      </li>`
    }).join('');
  }

  function toggle(e) {
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.id;
    clouds[index].done = !clouds[index].done;
    localStorage.setItem('clouds', JSON.stringify(clouds));
    populateList(clouds, cloudList);
  }

  function clearCloudsEvent() {
    localStorage.clear();
    clouds = [];
    populateList(clouds, cloudList);
  }

  addCloud.addEventListener('submit', addCloudEvent);
  cloudList.addEventListener('click', toggle);
  clearClouds.addEventListener('click', clearCloudsEvent);
  populateList(clouds, cloudList);
}
