/* exported initial */
/* create a function named initial with one parameter array
   create a new variable with an empty array
   create a new for loop that runs through the array's length
   inside of the code block for the for loop push the array values to the empty array
   return the array to the function so the code block ends */
function initial(array) {
  var initial = [];
  for (var i = 0; i < array.length - 1; i++) {
    initial.push(array[i]);
  }
  return initial;
}
