class Statement {

  constructor(){
    this.transactions = [];
  }

  statementHeader() {
    return "date || credit || debit || balance\n";
  }

  formatTransactions() {
    let transactionFormat = "";
    for (let i = (this.transactions.length - 1) ;i > -1; i--) {
      transactionFormat += `${this.transactions[i]["date"]} || `;
      if (this.transactions[i]["type"] === "debit") {
        transactionFormat += `|| ${this.transactions[i]["amount"]} || ${this.transactions[i]["balance"]}\n`;
      } else {
        transactionFormat += `${this.transactions[i]["amount"]} || || ${this.transactions[i]["balance"]}\n`;
      }
    }
    return transactionFormat;
  }

}

module.exports = Statement;
