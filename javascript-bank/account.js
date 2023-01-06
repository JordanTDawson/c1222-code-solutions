/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.getNumber = function () {
  return this.number;
};

Account.prototype.getHolder = function () {
  return this.holder;
};
