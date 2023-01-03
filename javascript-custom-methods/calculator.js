/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var sumOfNumbers = 0;
    for (var i = 0; i < numbers.length; i++) {
      sumOfNumbers += numbers[i];
    }
    return sumOfNumbers;
  },
  getAverage: function (numbers) {
    var sumOfNumbers = 0;
    var averageOfNumbers = 0;
    for (var i = 0; i < numbers.length; i++) {
      sumOfNumbers += numbers[i];
    }
    averageOfNumbers = (sumOfNumbers) / numbers.length;
    return averageOfNumbers;
  }
};
