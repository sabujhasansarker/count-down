const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date("Sep 30, 2020 00:00:00").getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    (getElement("#days").innerText = Math.floor(distance / day)),
      (getElement("#hours").innerText = Math.floor((distance % day) / hour)),
      (getElement("#minutes").innerText = Math.floor(
        (distance % hour) / minute
      )),
      (getElement("#seconds").innerText = Math.floor(
        (distance % minute) / second
      ));

    //do something later when date is reached
    //if (distance < 0) {
    //  clearInterval(x);
    //  'IT'S MY BIRTHDAY!;
    //}
  }, second);
