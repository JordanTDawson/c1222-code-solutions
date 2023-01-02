/* exported truncate */
/* create a new function named truncate with two parameters length and string
   in the functions code block we want to split the string at a specific length
   then we would concantenate '...' to the split string and return the new string */
function truncate(length, string) {
  return string.substring(0, length) + '...';
}
