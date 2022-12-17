/* exported getWords */
/* create a new function named getWords with one parameter string
   create a variable with an empty array
   create an if statement that has a condition
   return an empty array if there are no strings to push
   split the strings into a new array and return an array of strings */
function getWords(string) {
  var words = string;
  if (words === '') {
    return [];
  } else {
    var wordsArray = words.split(' ');
  }
  return wordsArray;
}
