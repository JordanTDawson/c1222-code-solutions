function ExampleConstructor() {
}
console.log('value of prototype Example Constructor: ', ExampleConstructor.prototype);
console.log('typeof prototype: ', typeof ExampleConstructor);
var exampleConstructed = new ExampleConstructor();
console.log('Example Constructed: ', exampleConstructed);
var instanceOfExample = exampleConstructed instanceof ExampleConstructor;
console.log(instanceOfExample);
