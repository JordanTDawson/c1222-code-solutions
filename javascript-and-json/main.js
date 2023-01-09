var books = [{
  isbn: '2134-1234123412349873415',
  title: 'Diary of a Wimpy Kid',
  author: 'Placeholder author'
},
{
  isbn: '854-85726954732998372459',
  title: 'Oragami Yoda',
  author: 'Placeholder author'
},
{
  isbn: '920-90218504315304918540',
  title: 'Captain Underpants',
  author: 'Placeholder author'
}
];

console.log('Book array: ', books);

console.log('Typeof book: ', typeof books);
console.log('JSON Stringify: ', JSON.stringify(books));
var student = '{"ID": 351447, "stringName":"Student"}';
console.log('student:', student);
console.log('typeof student: ', typeof student);
var object = JSON.parse(student);
console.log('object ID: ', object.ID);
console.log('object stringName: ', object.stringName);
console.log('typeof Object string name:', typeof object.stringName);
console.log('typeof Object ID:', typeof object.ID);
