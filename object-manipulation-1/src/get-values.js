/* exported getValues */
/* create a new function named getValues with one parameter object
   create a new variable with an empty array
   create a for in function
   inside the function push object with the value key index into the new array
   return the empty array */
function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
