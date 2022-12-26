var button = document.querySelector('button');
var body = document.querySelector('body');
var isOn = false;

function handleClick(event) {
  if (isOn === true) {
    body.className = 'body-off';
    button.className = 'button-off';
  } else {
    body.className = 'body-on';
    button.className = 'button-on';
  }
  isOn = !isOn;
}
button.addEventListener('click', handleClick);
