/* exported oddOrEven */
/* create function named oddOrEven with one parameter numbers
   create a variable with an empty array
   create a variable with a string
   create another variable with a string
   create a for loop that runs through the length of the parameter
   create an if statement with a condition
   if condition is met push string into empty array
   else condition push string into empty array
   once condition is met close if statement and return empty array
   close code function block */
function oddOrEven(numbers) {
  var oddEven = [];
  var odd = 'odd';
  var even = 'even';
  for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      oddEven.push(even);
    } else {
      oddEven.push(odd);
    }
  }
  return oddEven;
}
