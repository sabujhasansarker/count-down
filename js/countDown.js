const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

const $ = (element) => document.querySelector(element);
const li = document.querySelectorAll("ul li");

let countDown = new Date("Dec 31, 2040 00:00:00").getTime();

setInterval(function () {
  let date = new Date();
  let now = new Date().getTime();
  let distance = countDown - now;
  if (distance > 0) {
    let d = Math.floor(distance / day);
    let h = Math.floor((distance % day) / hour);
    let m = Math.floor((distance % hour) / minute);
    let s = Math.floor((distance % minute) / second);
    getElement("#days").innerHTML = d < 10 ? `0${d}` : d;
    getElement("#hours").innerHTML = h < 10 ? `0${h}` : h;
    getElement("#minutes").innerHTML = m < 10 ? `0${m}` : m;
    getElement("#seconds").innerHTML = s < 10 ? `0${s}` : s;
  } else {
    // for (let i = 0; i < li.length; i++) {
    //   li[i].remove();
    // }
    // if (date.getMonth() == 7 && date.getDate() == 19) {
    //   $("h1").innerHTML = "THis is My Birthday";
    // } else {
    //   $("h1").innerHTML = "Your Time is over";
    // }
  }
}, second);
