
class Account {
  constructor() {
    this.balance = 0.00;
    this.statement = [];
  }

  deposit(amount, date = new Date().toLocaleDateString) {
    this.balance += amount;
    const transaction = { 
      'amount': amount.toFixed(2),
      'date': date,
      'type': 'credit',
      'balance': this.balance.toFixed(2)
   };
   this.statement.push(transaction);
  }

  withdraw(amount, date = new Date().toLocaleDateString) {
    this.balance -= amount;
    const transaction = { 
      'amount': amount.toFixed(2),
      'date': date,
      'type': 'debit',
      'balance': this.balance.toFixed(2)
    };
    this.statement.push(transaction);
  }

  statementHeader() {
    return "date || credit || debit || balance\n";
  }

  formatTransactions() {
    let transactionFormat = '';
    for (let i = (this.statement.length - 1) ;i > -1; i--) {
      console.log(i);
      transactionFormat += `${this.statement[i]['date']} || `;
      if (this.statement[i]['type'] === 'debit') {
        transactionFormat += `|| ${this.statement[i]['amount']} || ${this.statement[i]['balance']}\n`;
      } else {
        transactionFormat += `${this.statement[i]['amount']} || || ${this.statement[i]['balance']}\n`;
      }
    }
    return transactionFormat;
  }

  printStatement() {
    return this.statementHeader() + this.formatTransactions();
  }

  statementHeader() {
    return "date || credit || debit || balance\n";
  }

}

module.exports = Account