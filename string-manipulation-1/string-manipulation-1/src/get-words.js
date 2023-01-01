/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  } else {
    var wordsArray = string.split(' ');
  }
  return wordsArray;
}
