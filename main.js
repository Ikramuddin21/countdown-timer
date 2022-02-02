const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const commingRamadan = () => {
    const ramadanTime = new Date('April 2, 2022').getTime();
    const currentTime = new Date().getTime();
    const gap = ramadanTime - currentTime;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const showDay = Math.floor(gap / day);
    const showHour = Math.floor((gap % day) / hour);
    const showMinute = Math.floor((gap % hour) / minute);
    const showSecond = Math.floor((gap % minute) / second);

    days.innerText = showDay;
    hours.innerText = showHour;
    minutes.innerText = showMinute;
    seconds.innerText = showSecond;
}

setInterval(commingRamadan, 1000);