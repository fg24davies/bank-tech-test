
class Account {
  constructor() {
    this.balance = 0;
    this.statement = [];
  }

  deposit(amount, date = new Date().toLocaleDateString) {
    this.balance += amount;
    const transaction = { 
      'amount': amount,
      'date': date,
      'type': 'credit',
      'balance': this.balance
   };
   this.statement.push(transaction);
  }

  withdraw(amount, date = new Date().toLocaleDateString) {
    this.balance -= amount;
    const transaction = { 
      'amount': amount,
      'date': date,
      'type': 'debit',
      'balance': this.balance
    };
    this.statement.push(transaction);
  }

  statementHeader() {
    return "date || credit || debit || balance\n";
  }

  printStatement() {
    console.log('the statement length', this.statement.length)
    let transactionFormat = '';
    for (let i = 0; i < this.statement.length; i++) {
      transactionFormat += `${this.statement[i]['date']} || `;
      if (this.statement[i]['type'] === 'debit') {
        transactionFormat += `|| ${this.statement[i]['amount']} || ${this.statement[i]['balance']}\n`;
      } else {
        transactionFormat += `${this.statement[i]['amount']} || || ${this.statement[i]['balance']}\n`;
      }
    }
    console.log(this.statementHeader() + transactionFormat);
    return statementHeader() + transactionFormat;
  }


  // _formatTransaction(date, type, balance) {
    
  // }

}

module.exports = Account