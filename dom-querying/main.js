document.querySelector('h1');
console.log('$heading', document.querySelector('h1'));

console.dir(document.querySelector('h1'));

document.querySelector('#explanation');
console.log('$explanation', document.querySelector('#explanation'));

console.dir(document.querySelector('#explanation'));

document.querySelector('.hint');
console.log('$hint', document.querySelector('p.hint'));

console.dir(document.querySelector('p.hint'));

document.querySelectorAll('p');
console.log('$paragraphs', document.querySelectorAll('p'));

document.querySelectorAll('a.example-link');
console.log('$links', document.querySelectorAll('a.example-link'));
