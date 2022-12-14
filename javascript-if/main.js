/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if ((number % 2) === 0) {
    return 'The number is even';
  } else {
    return 'The number is odd';
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if ((person.age >= 16) && (person.age >= 21)) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age <= 21) {
    return false;
  } else {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'nuetral';
  } else if ((pH >= 0) && (pH <= 6)) {
    return 'acidic';
  } else if ((pH >= 8) && (pH <= 14)) {
    return 'base';
  } else {
    return 'Invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if ((name === 'yakko') || (name === 'wakko')) {
    return "We're the Warner Brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everyone!';
  }
}
