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
  test('it deposits an amount to the account', () => {
    newAccount.deposit(15);
    expect(newAccount.balance).toEqual(15);
  });
});

describe('withdraw', () => {
   const newAccount = new Account();
  test('it withdraws an amount from the account', () => {
    newAccount.deposit(30);
    newAccount.withdraw(15);
    expect(newAccount.balance).toEqual(15);
  });
});