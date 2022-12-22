/* create a new variable the queries the class tab container.
   create a new variable that queries the class tab.
   create a new variable that queries the class view.
   create an addEventListener on the tab container class with two parameters the string click and an anonymous function
   with one parameter event.
   create an if statement that checks if target event matches the tab class
   create a for loop that runs through the tabNodeList length
   create an if statement that checks the tabNodeList stricly equals event target.
   if condition is met add class name that makes tab active
   else just keep normal tab
   create a new variable that gets the attribute data view
   create a for loop that checks the length of the view
   create an if statement with a condition that checks if the view is the same.
   if condition is met push view to tab.
   if condition is not met hide the view. */

var tabContainer = document.querySelector('.tab-container');
var tabNodeList = document.querySelectorAll('.tab');
var views = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var tabIndex = 0; tabIndex < tabNodeList.length; tabIndex++) {
      if (tabNodeList[tabIndex] === event.target) {
        tabNodeList[tabIndex].className = 'tab active';
      } else {
        tabNodeList[tabIndex].className = 'tab';
      }
    }
  }
  var viewName = event.target.getAttribute('data-view');
  for (var viewIndex = 0; viewIndex < views.length; viewIndex++) {
    var element = views[viewIndex];
    if (element.getAttribute('data-view') === viewName) {
      element.className = 'data-view';
    } else {
      element.className = 'hidden';
    }
  }

});
