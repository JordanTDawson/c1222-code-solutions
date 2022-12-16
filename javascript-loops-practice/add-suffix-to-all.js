/* exported addSuffixToAll */
/* create a new function named addSuffixToAll with parameters word and suffix
   create a new variable with an empty array
   create a for loop that runs through the length of the words parameter
   in the for loops code block we want to add words and the suffix together
   after we add those we want to push them to the new array
   once the code block is finished we want to return the array to the function. */
function addSuffixToAll(words, suffix) {
  var addedSuffix = [];
  for (var i = 0; i < words.length; i++) {
    addedSuffix.push(words[i] + suffix);
  }
  return addedSuffix;
}
