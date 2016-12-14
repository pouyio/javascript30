/*jshint esversion: 6 */

(function() {
    const secondHand = document.querySelector('.hand-second');
    const minuteHand = document.querySelector('.hand-minute');
    const hourHand = document.querySelector('.hand-hour');
    const digital = document.querySelector('.digital');

    function setTime() {
        const time = new Date();

        const seconds = time.getSeconds();
        const secondsDegree = ( seconds / 60) * 360 + 90;
        secondHand.style.transform = `rotate(${secondsDegree}deg)`;

        const minutes = time.getMinutes();
        const minutesDegree = (minutes / 60) * 360 + 90;
        minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

        const hours = time.getHours();
        const hoursDegree = (hours/12) * 360 + 90;
        hourHand.style.transform = `rotate(${hoursDegree}deg)`;

        digital.innerText = `${hours}:${minutes}:${seconds}`;

    }

    setInterval(setTime, 1000);
})();
