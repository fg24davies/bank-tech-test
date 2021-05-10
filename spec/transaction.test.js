const Transaction = require('../src/transaction')

describe('creates a new transaction', () => {
    const transaction = new Transaction(5, 0, "credit", "01/01/01")

    test('it saved the transaction details in a transaction object', () => {
      expect(transaction.amount).toEqual("5.00")
      expect(transaction.balance).toEqual("0.00")
      expect(transaction.type).toEqual("credit")
      expect(transaction.date).toEqual("01/01/01")
    });

});
