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
    getElement("#days").innerHTML = Math.floor(distance / day);
    getElement("#hours").innerHTML = Math.floor((distance % day) / hour);
    getElement("#minutes").innerHTML = Math.floor((distance % hour) / minute);
    getElement("#seconds").innerHTML = Math.floor((distance % minute) / second);
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
