var maximumValue = Math.max(4, 15, 12, 25);
console.log('maximunValue:', maximumValue);

var heroes = ['MoonKnight', 'Invincible', 'Homelander', 'BeastBoy'];
var randomNumber = Math.random(4) * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'The Adventures of Captain Underpants',
    author: 'Dav Pilkey'
  },
  {
    title: 'Diary of A Wimpy Kid',
    author: 'Jeff Kinney'
  },
  {
    title: 'Goosebumps',
    author: 'R. L. Stine'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(js, css);
library.splice(2);
console.log('library:', library);

var fullName = 'Jordan Dawson';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
