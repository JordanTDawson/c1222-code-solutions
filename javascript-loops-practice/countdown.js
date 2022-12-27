/* exported countdown */
/* start with a function named countdown with parameter number
   create a new variable with an empty array
   use a while loop that has a condition
   push the new number into the result array
   decrement the new number until reaches 0
   return the result variable to end the function */
function countdown(number) {
  var result = [];
  while (number >= 0) {
    result.push(number);
    number--;
  }
  return result;
}
