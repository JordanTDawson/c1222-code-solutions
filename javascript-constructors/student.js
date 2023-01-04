/* exported Student */
function Student(firstName, lastName, subject) {
  var student = {
    firstName: 'Jordan',
    lastName: 'Dawson',
    subject: 'JavaScript',
    getFullName: function () {
      return this.firstName + ' ' + this.lastName;
    },
    getIntroduction: function () {
      var introduction = 'Hello, my name is ' + this.getFullName() + ' and I am studying ' +
      this.subject + '.';
      return introduction;
    }
  };
  return student;
}
