function handleFocus(event) {
  console.log('Focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('Blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of ', event.target.name + ':', event.target.value);
}

var userName = document.querySelector('#user-name');
var userEmail = document.querySelector('#user-email');
var userMessage = document.querySelector('#user-message');

userMessage.addEventListener('input', handleInput);
userName.addEventListener('input', handleInput);
userEmail.addEventListener('input', handleInput);

userName.addEventListener('focus', handleFocus);
userMessage.addEventListener('focus', handleFocus);
userEmail.addEventListener('focus', handleFocus);

userName.addEventListener('blur', handleBlur);
userMessage.addEventListener('blur', handleBlur);
userEmail.addEventListener('blur', handleBlur);
