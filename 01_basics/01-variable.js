const accountId = 2130215;
let accountEmail = "hello@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";

/*
Prefer not to use va
because it have issue in block scope and funtional scope.
*/

// accountId = 2    const never get changes

console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity]);