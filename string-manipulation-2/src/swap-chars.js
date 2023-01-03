/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var stringArray = string.split('');
  stringArray[firstIndex] = string[secondIndex];
  stringArray[secondIndex] = string[firstIndex];
  return stringArray.join('');
}
