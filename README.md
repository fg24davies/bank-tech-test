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

I created the following user stories from the criteria
```
As a customer
So I can use a bank account
I would like to create a bank account

As a bank account holder
So I can save money
I would like deposit money into my account (credit)

As a bank account holder
So I can spend money 
I would like to withdraw money from my account (debit)

As a bank account holder
So I can track my spending
I would like to be able to see a statement of my transactions with amount and date
```

I then did class modelling (using nouns and verbs) to work out that I wanted to have 3 classes: an Account, Transaction, Statement.
However, I was not sure how to start with three classes so I thought I would write it all in one class and then extract into classes when I had a better idea and felt more confident with the testing, I am currently struggling to mock and dependencies in Jest so I wanted to write tests and code to begin with, without being blocked by this. 

The instructions and test coverage and console below are for MAIN branch.
This afternoon I began to do some class extraction/refactoring on the refactor1 branch (half the tests failing though at the moment and it's in a bit of a mess). I think I might just have got the Transaction/Account classes working together.

### Run the code and tests: 

Clone the repository
Run `npm install`
Run `npm run test`

### Testing:

Testing library is Jest and linter is ESLINT.
There are no errors in eslint, all tests passing with the test coverage shown below:

![image](https://user-images.githubusercontent.com/30720508/117179127-b95fe280-adca-11eb-8f18-fedaefcc99ca.png)


The missing line in the coverage I think is referring to the use of the new Date() function which is being called when deposit is called, but it is not testing that. I am not sure how to do that in Jest.

My second test is definitely testing state rather than behaviour.


### Example of how the code works in the console

![image](https://user-images.githubusercontent.com/30720508/117178597-232bbc80-adca-11eb-8121-95b57a494e05.png)




