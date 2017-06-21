window.onload = () => {
 const body = document.querySelector('body');
 const text = document.querySelector('.text');
 const walk = 100;

 const shadow = (e) => {
   const {offsetWidth: width, offsetHeight: height} = body;
   let {offsetX: x, offsetY: y} = e;
   if(this !== e.target){
     x = x + e.target.offsetLeft;
     y = y + e.target.offsetTop;
   }

   const xWalk = Math.round(x/width * walk) - (walk / 2);
   const yWalk = Math.round(y/width * walk) - (walk / 2);

   console.log(xWalk, yWalk);
   text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
 }
 body.addEventListener('mousemove', shadow);
}
