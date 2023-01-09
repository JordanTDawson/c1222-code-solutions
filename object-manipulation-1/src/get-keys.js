/* exported getKeys */
/* create a function named getKeys with one parameter object
   create a new function with an empty array
   create a for in loop that creates a new variable
   inside the for in function push the variable into the empty array
   close the for in function and return the array to the function code block */
function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
