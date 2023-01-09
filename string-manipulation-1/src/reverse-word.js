/* exported reverseWord */
/* create a new function named reverseWord with one parameter word
   create a new variable wit an empty string
   create a new for loop that starts at the end of the strings length
   and ends at the end of the string
   in the for loop we're gonna be adding the current letter at the index to
   the empty string.
   close the for loop code block
   return the newString value to the function code block and end code block. */
function reverseWord(word) {
  var newString = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
}
