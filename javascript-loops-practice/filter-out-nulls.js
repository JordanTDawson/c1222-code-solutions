/* exported filterOutNulls */
/* a new variable with an empty array for the new values
   for loop that runs through the length of the array
   with an if statement that checks for null and pulls
   them out of the array and return the value of the array. */
function filterOutNulls(values) {
  var noNulls = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      noNulls.push(values[i]);
    }
  }
  return noNulls;
}
