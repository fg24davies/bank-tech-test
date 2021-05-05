class Transaction {

  constructor(amount, balance, type, date = new Date().toLocaleDateString()){
    this.amount = amount;
    this.balance = balance;
    this.type = type;
    this.date = date;
  }

}

module.exports = Transaction;