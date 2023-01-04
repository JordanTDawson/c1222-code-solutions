var $countdown = document.querySelector('.countdown-display');
var intervalID = 4;
function countDown() {
  if (intervalID === 0) {
    $countdown.textContent = '~Earth Beeeelooooow Us';
    clearInterval(intervalID);
  } else {
    $countdown.textContent = intervalID;
    intervalID--;
  }
}
setInterval(countDown, 1000);
