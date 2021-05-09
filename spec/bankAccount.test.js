const Account = require('../src/bankAccount');
const Statement =  require("../src/statement.js");
jest.mock('../src/statement.js');  //statement is now a mock constructor

beforeAll(() => {
    return newAccount = new Account();
  });

// beforeEach(() => {
//   Statement.mockClear();
// }) 

describe('creates a new account', () => {
  test('it initialises with 0 balance', () => {
    expect(newAccount.balance).toEqual(0);
  });
  test('it initialises a new statement object', () => {
    //jest.spyOn(Statement, 'new').mockReturnValue('new statement')
    expect(Statement).toHaveBeenCalledTimes(1);
  });
});

  // the following 3 tests are failing because I have mocked the statement class above
  // I think I need to then mock the methods

  test('deposit makes a new credit transaction', () => {
    jest.spyOn(Date.prototype, 'toLocaleDateString').mockReturnValue('01/01/2001');
    newAccount.deposit(15);
    expect(newAccount.statement.transactions).toEqual([{'amount': '15.00', 'date': '01/01/2001', 'type': 'credit', 'balance': `${newAccount.balance.toFixed(2)}`}]);
  });

  test('withdraw makes a new debit transaction', () => {
    jest.spyOn(Date.prototype, 'toLocaleDateString').mockReturnValue('01/02/2001');
    newAccount.withdraw(10);
    expect(newAccount.statement.transactions[1]).toEqual({'amount': '10.00', 'date': '01/02/2001', 'type': 'debit', 'balance': `${newAccount.balance.toFixed(2)}`});
  });

  test('printStatement prints the statement of transactions', () => {
    jest.spyOn(Date.prototype, 'toLocaleDateString').mockReturnValue('01/03/2001');
    newAccount.deposit(1000);
    console.log = jest.fn();     
    newAccount.printStatement();
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toHaveBeenLastCalledWith("date || credit || debit || balance\n01/03/2001 || 1000.00 || || 1005.00\n01/02/2001 || || 10.00 || 5.00\n01/01/2001 || 15.00 || || 15.00\n");
  });

