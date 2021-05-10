# Bank Tech Test

## Specification

### Requirements

- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```
### Code Structure

After modelling my user stories based on nouns and actions, I made 3 classes - Bank Account, Transaction and Statement.
A new transaction class object is created from the Account class by depositing or withdrawing money.
The transaction is also saved into the Statement class in a method in Account but I'm not sure if this is good practise.

### How to run the code

The code is run in the Node console.
Clone the repository
Run ```npm install```
Run ```node```
Require the bankAccount module in node as below:

![image](https://user-images.githubusercontent.com/30720508/117632819-5af18600-b175-11eb-9252-5be81fd853fb.png)


### Testing

Testing is done with Jest. There is a snapshot of my test coverage below as it stands. Three tests are failing because I was trying to work out how to mock a class (mock the Statement class). I can mock that it's been created but I cannot mock the methods so the methods in Statement are breaking the tests.

![image](https://user-images.githubusercontent.com/30720508/117633430-ef5be880-b175-11eb-8c07-61f05a94de16.png)

To run all the tests:
Run ```npm run test```






