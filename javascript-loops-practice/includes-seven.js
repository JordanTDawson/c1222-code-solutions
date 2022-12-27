/* exported includesSeven */
/* create a function named includesSeven with one parameter array
   create for loop that runs through the array length
   in the code block have an if statement that checks if array had 7
   return true to the if statement if there is a 7
   return false to for loop if the if statement does not run.
   end the function code block */
function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
