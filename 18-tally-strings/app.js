window.onload = () => {

  const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

  const seconds = timeNodes.reduce((acc, timeNode) => {
    const [mins, secs] = timeNode.dataset.time.split('.').map(parseFloat);
    return acc + secs + mins * 60;
  }, 0);

  let secondsLeft = seconds;
  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  const minutes = Math.floor(secondsLeft / 60);
  secondsLeft = (secondsLeft % 60);

  document.querySelector('.total').innerText = `${hours}.${minutes}.${secondsLeft}`;

}
