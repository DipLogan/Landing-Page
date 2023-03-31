var countDownDate = new Date("nov 12, 2023 18:30:30").getTime();
var expiredArea = document.getElementById("demo");
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (distance < 0) {
    clearInterval(x);
    expiredArea.innerHTML = "EXPIRED";
    expiredArea.style.fontSize = "40px";
    document.getElementById("timer").style.display = "none";
  }
}, 1000);
