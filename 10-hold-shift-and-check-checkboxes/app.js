/*jshint esversion: 6 */

(function() {

  const checkboxes = document.querySelectorAll('input');
  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleClick));
  let lastChecked;

  function handleClick(e) {
    let inBetween = false;
    if(e.shiftKey && this.checked) {

      checkboxes.forEach(checkbox => {
        if(this === checkbox || checkbox === lastChecked) {
          inBetween = !inBetween;
        }

        if(inBetween) {
          checkbox.checked = true;
        }
      });
    }

    lastChecked = this;
  }

})();
