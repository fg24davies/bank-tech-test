const Account = require('../src/bankAccount')

describe('creates a new account', () => {
  test('it initialises with 0 balance', () => {
    const newAccount = new Account();
    expect(newAccount.balance).toBe(0);
  });
});