/* exported getStudentNames */
/* create a variable to hold an empty array for output */
/* for each object with a student name */
/* access the array literal */
/* access the object */
/* pull the value of the name from each object */
/* push the name values to the empty array */
/* return the new list of array values with name */

function getStudentNames(students) {
  var names = [];
  for (var i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
}
