function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(7);
console.log(convertMinutesToSecondsResult);

function greeting(name) {
  var greet = 'Hey, ' + name;
  return greet;
}

var greetingresult = greeting('Jordan');
console.log('Greeting result:', greetingresult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(10, 20);
console.log('Area result:', getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResults = getFirstName({ firstName: 'Jordan', lastName: 'Dawson' });
console.log('Your first name is', getFirstNameResults + '.');

function getLastElement(array) {
  var lastElement = array.length - 1;
  return array[lastElement];
}

var getLastElementResults = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('The last element of the array is', getLastElementResults + '.');
