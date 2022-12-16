/* exported sumAll */
/* start a new function named sumAll with the parameter numbers
   create a new variable that equals 0
   create a for loop that uses numbers.length as the condition
   in the loops code block add the result and numbers index
   return result to the function to end the code block */
function sumAll(numbers) {
  var result = 0;
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
