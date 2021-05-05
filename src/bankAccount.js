const Transaction =  require('./transaction.js')

const CREDIT = "credit"
const DEBIT = "debit"

class Account {
  
  constructor() {
    this.balance = 0;
    this.statement = [];
    //this.transaction = new Transaction();
  }

  transaction(amount, balance, type) {
    return new Transaction(amount, balance, type);
  }

  deposit(amount) {
    this.statement.push(this.transaction(amount, this.balance, CREDIT)); 
    console.log('statement', this.statement)
  }

  withdraw(amount, date = new Date().toLocaleDateString()) {
    this.balance -= amount;
    console.log('balance', this.balance)
    this.transaction.type = DEBIT;
    this.transaction.amount = amount.toFixed(2);
    this.transaction.date = date;
    this.transaction.balance = parseFloat(this.balance).toFixed(2);
    this.statement.push(this.transaction);
  }

  formatTransactions() {
    let transactionFormat = "";
    for (let i = (this.statement.length - 1) ;i > -1; i--) {
      transactionFormat += `${this.statement[i]["date"]} || `;
      if (this.statement[i]["type"] === "debit") {
        transactionFormat += `|| ${this.statement[i]["amount"]} || ${this.statement[i]["balance"]}\n`;
      } else {
        transactionFormat += `${this.statement[i]["amount"]} || || ${this.statement[i]["balance"]}\n`;
      }
    }
    return transactionFormat;
  }

  printStatement() {
    return console.log(this.statementHeader() + this.formatTransactions());
  }

  statementHeader() {
    return "date || credit || debit || balance\n";
  }

}

module.exports = Account;
