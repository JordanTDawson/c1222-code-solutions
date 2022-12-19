/* exported tail */
/* create a new function named tail with one parameter array
   create a new variable with an empty array
   create a for loop with a condition
   inside the for loop push the values to the new variable
   once condition is met return the tail to the function code block */
function tail(array) {
  var tail = [];
  for (var i = 1; i < array.length; i++) {
    tail.push(array[i]);
  }
  return tail;
}
