const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const giveaway = document.querySelector(".giveaway");
const timer = document.querySelector(".timer");
const time = document.querySelectorAll(".time span");

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();


const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 10, 0, 0);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
const formatMinute = minute < 10 ? `0${minute}` : minute;

let month = months[futureDate.getMonth()];
let weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();



giveaway.innerText = `Giveaway Ends On ${weekday}, ${date} ${month} ${year} ${hour}:${formatMinute}am`;

const futureTime = futureDate.getTime();

function getRemaindingTime() {
    const today = new Date().getTime();

    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = Math.floor(t / oneDay);

    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    time.forEach((item, idx) => {
        item.innerHTML = format(values[idx])
    })

    if (t < 0) {
        clearInterval(countdown);
        timer.innerHTML = ` sorry this giveaway has expired!`
    }

}

let countdown = setInterval(getRemaindingTime, 1000);


getRemaindingTime()

function format(item) {
    if (item < 10) {
        return (item = `0${item}`)
    }
    return item
}
