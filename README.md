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




