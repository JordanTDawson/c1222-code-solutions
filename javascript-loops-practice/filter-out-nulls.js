/* exported filterOutNulls */
/* a new variable with an empty array for the new values
   for loop that runs through the length of the array
   with an if statement that checks for null and pulls
   them out of the array but still returns the other values back to the new array.
   once it has ran through the if statement and "filtered" nulls out it will
   return the noNulls array to the function so the function ends. */
function filterOutNulls(values) {
  var noNulls = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      noNulls.push(values[i]);
    }
  }
  return noNulls;
}
