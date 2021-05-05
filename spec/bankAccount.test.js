const Account = require('../src/bankAccount')

describe('creates a new account', () => {
  const newAccount = new Account();
  test('it initialises with 0 balance', () => {
    expect(newAccount.balance).toEqual(0);
  });
  test('it initialises with an empty bank statement', () => {
    expect(newAccount.statement).toEqual([]);
  });
});

describe('deposit', () => {
  const newAccount = new Account();
  test('it creates a credit transaction', () => {
    const date = '01/01/01';
    newAccount.deposit(15, date);
    expect(newAccount.statement).toEqual([{'amount': '15.00', 'date': '01/01/01', 'type': 'credit', 'balance': `${newAccount.balance.toFixed(2)}`}]);
  });
});

describe('withdraw', () => {
   const newAccount = new Account();
  test('it creates a new debit transaction', () => {
    newAccount.deposit(30);
    const date = '01/01/01';
    newAccount.withdraw(10, date);
    expect(newAccount.statement[1]).toEqual({'amount': '10.00', 'date': '01/01/01', 'type': 'debit', 'balance': `${newAccount.balance.toFixed(2)}`});
  });
});

describe('creating the bank statement', () => {
  const newAccount = new Account();
  const date1 = '10/01/2012'
  const date2 = '13/01/2012'
  const date3 = '14/01/2012'
  newAccount.deposit(1000, date1)
  newAccount.deposit(2000, date2)
  newAccount.withdraw(500, date3)

  test('it creates the statement header', () => {
    expect(newAccount.statementHeader()).toEqual("date || credit || debit || balance\n");
  });

  test('it formats the transactions ready for printing', () => {
    expect(newAccount.formatTransactions()).toEqual("14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00\n");
  });
  
  test('it prints the list of transactions', () => {
    console.log = jest.fn();     
    newAccount.printStatement();
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toHaveBeenLastCalledWith(`date || credit || debit || balance\n${date3} || || 500.00 || 2500.00\n${date2} || 2000.00 || || 3000.00\n${date1} || 1000.00 || || 1000.00\n`);
  });
});
