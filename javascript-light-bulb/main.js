var button = document.querySelector('button');
var body = document.querySelector('body');
var buttonOff = document.querySelector('.button-off');
var buttonOn = document.querySelector('.button-on');
var bodyOff = document.querySelector('.body-off');
var bodyOn = document.querySelector('.body-on');
var isOn = false;
function handleClick(event) {
  if (isOn === false) {
    body.className(bodyOff);
    button.className(buttonOff);
  } else {
    body.className(bodyOn);
    button.className(buttonOn);
  }
  isOn = !isOn;
}

button.addEventListener('click', handleClick);
