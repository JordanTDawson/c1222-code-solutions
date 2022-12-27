function handleClick(event) {
  console.log('button clicked!');
  console.log(event);
  console.log(event.target);
}

var button = document.querySelector('button.click-button');
button.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var hovered = document.querySelector('button.hover-button');
hovered.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var doubleClick = document.querySelector('button.double-click-button');
doubleClick.addEventListener('dblclick', handleDoubleClick);
