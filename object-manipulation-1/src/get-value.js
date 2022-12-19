/* exported getValue */
/* create a function named getValue with two parameters object and key
   create a for in loop
   in the for in loops code block value equals object at key
   close the cdoe block and return the value. */
function getValue(object, key) {
  for (var value in object) {
    value = object[key];
  }
  return value;
}
