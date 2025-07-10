const accountId = 1231
let accountEmail = "shivam123@gmail.com"
var accountPassword = "1234567890"
accountCity = "Delhi"
let accountState;


// accountId = 232  not allowed in JavaScript as const variables cannot be reassigned

/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "spsp123@gmail.com"
accountPassword = "0987654321"
accountCity = "Mumbai"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


// what is Variable?
// A variable is a named storage location in a program that can hold a value.
// It allows you to store, retrieve, and manipulate data during the execution of a program.

