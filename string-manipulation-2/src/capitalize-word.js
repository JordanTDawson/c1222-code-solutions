/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    word = 'JavaScript';
    return word;
  } else {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
}
