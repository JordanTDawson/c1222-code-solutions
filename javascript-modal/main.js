var open = document.querySelector('#open');
var modalContainer = document.querySelector('#closed-container');
var close = document.querySelector('#close');

open.addEventListener('click', () => {
  modalContainer.classList.add('show');
});

close.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});
