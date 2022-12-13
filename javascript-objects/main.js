var student = {
  firstName: 'Jordan',
  lastName: 'Dawson',
  age: 20
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('My full name is:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Professional Car Detailer';
console.log('Do I live in Irvine?: ', student.livesInIrvine);
console.log('What your previous occupation?: ', student.previousOccupation);

var vehicle = {
  make: 'Ford',
  model: 'Mustang GT',
  year: 2012
};
vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log('What is the color of the vehicle?: ', vehicle['color']);
console.log('Is it convertible?: ', vehicle['isConvertible']);
console.log('What kind of vehicle do you own?', vehicle);

var pet = {
  name: 'Olive',
  type: 'Golden Doodle'
};
delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
