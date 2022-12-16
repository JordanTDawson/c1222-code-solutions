/* exported getIndexes */
/* declare a new function named getIndexes with parameter array
   create a new variable indexes with an empty array
   create a new variable currentIndex with the number 0
   create for loop that runs through the array.length
   in the loops code block we want to push the currentIndexes value
   into the empty array and we want to add 1 to currentIndex
   once the condition is met return the array indexes to the function */
function getIndexes(array) {
  var indexes = [];
  var currentIndex = 0;
  for (var i = 0; i < array.length; i++) {
    indexes.push(currentIndex);
    currentIndex += 1;
  }
  return indexes;
}
