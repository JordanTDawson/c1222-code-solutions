var $head = document.querySelector('.message');
function replaceHeadElement() {
  $head.textContent = 'Hello There!';
}

setTimeout(replaceHeadElement, 2000);
