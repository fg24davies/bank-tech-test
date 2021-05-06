const Transaction =  require("./transaction.js");
const Statement =  require("./statement.js");

const CREDIT = "credit";  // are these meant to be out here?
const DEBIT = "debit";

class Account {
  
  constructor() {
    this.balance = 0;
    this.statement = new Statement();
    //this.transaction = new Transaction(amount, balance, type) -- see comments below why I would like this here!
  }

  // I really think this could/should be in the constructor but I struggle to pass the arguemnts in when it is?
  // But actually why would I want to instantiate a transaction object if the user doesn't do a transaction
  // BUT if it's not in there then I think I cannot move my saveTransaction into the transaction class, like I did with my format function(and then use this.statement.format..) because this.transaction then means nothing?
  transaction(amount, balance, type) {
    return new Transaction(amount, balance, type);
  } 

  // I would like this method to be in the transaction class, my test for it would then move over also.
  saveTransaction(amount, type) {
    this.statement.transactions.push(this.transaction(amount, this.balance, type));
  }

  deposit(amount) {
    this.balance += amount;
    this.saveTransaction(amount, CREDIT);
  }

  withdraw(amount) {
    this.balance -= amount;
    this.saveTransaction(amount, DEBIT);
  }

  printStatement() {
    return console.log(this.statement.statementHeader() + this.statement.formatTransactions());
  }

}

module.exports = Account;
