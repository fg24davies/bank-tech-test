const Account = require('../src/bankAccount')

describe('creates a new account', () => {
  const newAccount = new Account();
  test('it initialises with 0 balance', () => {
   
    expect(newAccount.balance).toBe(0);
  });
});

describe('deposit', () => {
   const newAccount = new Account();
  test('it deposits an amount to the card', () => {
    newAccount.deposit(15);
    expect(newAccount.balance).toBe(15);
  });
});