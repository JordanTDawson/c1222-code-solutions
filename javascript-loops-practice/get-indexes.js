/* exported getIndexes */
function getIndexes(array) {
  var indexes = [];
  var currentIndex = 0;
  for (var i = 0; i < array.length; i++) {
    indexes.push(currentIndex);
    currentIndex += 1;
  }
  return indexes;
}
