/* exported toObject */
/* create a function named toObject with one parameter keyValuePair
   create a variable named jeff with an empty object
   have jeff at keyValuePair at index 0 equal keyvaluepair at 1
   return jeff to the function code block */
function toObject(keyValuePair) {
  var jeff = {};
  jeff[keyValuePair[0]] = keyValuePair[1];
  return jeff;
}
