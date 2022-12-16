/* exported filterOutStrings */
/* create a new function named filterOutStrings with the parameter values
   create a new variable with an empty array
   create a for loop that runs through the values.length
   create an if statement that checks the typeof values in the array
   if the typeof value is not a string it will be pushed back to the new array
   once the if statement is done, return the noStrings to the function code block
   to end the function */
function filterOutStrings(values) {
  var noStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      noStrings.push(values[i]);
    }
  }
  return noStrings;
}
