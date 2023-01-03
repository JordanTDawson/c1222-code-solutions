/* exported numVowels */
function numVowels(string) {
  var vowelsCount = 0;
  for (var i = 0; i <= string.length - 1; i++) {
    if ('aeiou'.includes(string[i].toLowerCase())) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
