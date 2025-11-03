const password = /^[A-Za-z0-9]{6}$/ 

console.log("Password tests:");
console.log(password.test("abc123"));    // true (6 chars, letters + numbers)
console.log(password.test("hello1"));    // true (6 chars)
console.log(password.test("abc12"));     // false (only 5 chars)
console.log(password.test("abc1234"));   // false (7 chars)
console.log(password.test("abc 123"));   // false (has space)
console.log(password.test("abc!23"));    // false (has symbol)