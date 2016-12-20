/*jshint esversion: 6 */

(function() {
    const canvas = document.querySelector('#canvas');
    const colorInput = document.querySelector('#color');
    const widthInput = document.querySelector('#width');
    const context = canvas.getContext('2d');

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let lastTime = 0;
    let color = '#ffff';
    let width = 1;

    context.lineJoin = 'round';
    context.lineCap = 'round';


    colorInput.addEventListener('change', setColor);
    widthInput.addEventListener('change', setWidth);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mousedown', (e) => {
      lastTime = new Date();
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);

    function setColor() {
      color = this.value;
    }
    function setWidth() {
      width = this.value;
    }

    function draw(e) {
        if (!isDrawing) return;
        context.strokeStyle = color;
        context.lineWidth = width;
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();

        [lastX, lastY] = [e.offsetX, e.offsetY];

    }

})();
