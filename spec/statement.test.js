const Statement = require("../src/statement");

describe('formats the statement', () => {
  const statement = new Statement()

  // I think I should really put in a mocked transaction object here?
  statement.transactions = [{"amount": "500.00", "type": "debit", "balance": "2500.00", "date": "14/01/2012"}];

  test('it creates the statement header', () => {
    expect(statement.statementHeader()).toEqual("date || credit || debit || balance\n");
  });

  test('it formats the transactions ready for printing', () => {
    expect(statement.formatTransactions()).toEqual("14/01/2012 || || 500.00 || 2500.00\n");
  });
});

