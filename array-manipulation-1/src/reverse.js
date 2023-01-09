/* exported reverse */
/* create a new function named reverse with one parameter arrray
   create a new variable with an empty array
   create a while loop with the condition array.length
   in the while loops code block push the values of the parameter array popped array
   to the new empty array
   return reverse to function to end code block */
function reverse(array) {
  var reverse = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
  }
  return reverse;
}
