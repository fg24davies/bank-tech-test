// const Statement =  require(""./statement.js");

class Transaction {

  constructor(amount, balance, type, date = new Date().toLocaleDateString()){
    this.amount = amount.toFixed(2);
    this.balance = balance.toFixed(2);
    this.type = type;
    this.date = date;
  }

}

module.exports = Transaction;
