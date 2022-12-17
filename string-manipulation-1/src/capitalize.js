/* exported capitalize */
/* create a function named capitalize with one parameter word
   have an if statement that capitalizes the first letter of each word
   if the letters are after the first letter then they will be lowercased
   return the value of the string to the function. */
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
