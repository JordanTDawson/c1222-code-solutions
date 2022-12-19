/* exported compact */
/* create a function named compact with one parameter array
   create a new variable with an empty array
   create a new for loop with a condition that runs through the array's length
   create an if statement in the for loop with a condition
   push the array indexes to the compact array
   close the if statement and return the array to the function to end the code block */
function compact(array) {
  var compact = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compact.push(array[i]);
    }
  }
  return compact;
}
