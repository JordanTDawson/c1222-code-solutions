/* exported findIndex */
/* create new function named findIndex with two parameters array and value
   create a variable with 0
   create a for loop that runs through the array parameters length
   create an if statement that checks parameter value with the array
   if statement is true return the value of the index to variable
   if statement is false return -1
   close if statement and for loop block
   return index
    */
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
