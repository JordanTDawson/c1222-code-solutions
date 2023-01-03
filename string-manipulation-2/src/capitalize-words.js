/* exported capitalizeWords */
function capitalizeWords(string) {
  var words = string.split(' ');
  var newArray = [];
  for (var i = 0; i < words.length; i++) {
    var singleWord = words[i].toLowerCase();
    var firstCharacter = singleWord[0].toUpperCase();
    var restOfWord = singleWord.substring(1);
    var newWord = firstCharacter + restOfWord;
    newArray.push(newWord);
  }

  return newArray.join(' ');
}
