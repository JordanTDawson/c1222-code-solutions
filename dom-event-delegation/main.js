var taskList = document.querySelector('.task-list');
function handleClick(event) {
  console.log('event target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var closest = event.target.closest('.task-list-item');
    console.log(closest);
    closest.remove();
  }
}
taskList.addEventListener('click', handleClick);

/*
.addEventListener('click', function (event) { //this function is an anonymous function.
  console.log('event.target: ', event.target);
  console.log('event.target.tagetName: ', event.target.tagName);

  if (event.target.tagName !== 'BUTTON') { // guard clause a.k.a a good habit to start.
    return;
  }

  var taskListItem = event.target.closest('.task-list-item');
  console.log('closest .task-list-item', taskListItem);
  taskListItem.remove();
});
*/
