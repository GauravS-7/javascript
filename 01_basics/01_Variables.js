const accountId = 123143
let accountEmail = "sherlock@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "Sh@sh.com"
accountPassword = "123123"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])