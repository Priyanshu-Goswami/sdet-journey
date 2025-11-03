// // 1. Match phone numbers: 123-456-7890
// const phone = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;

// console.log("Phone tests:");
// console.log(phone.test("123-456-7890")); // true
// console.log(phone.test("123-45-7890"));  // false

// 2. YOUR TURN: Match zip codes: 5 digits (like 12345)
const zipCode = /^[0-9]{5}$/

console.log("Zip tests:");
console.log(zipCode.test("12345"));  // should be true
console.log(zipCode.test("1234"));   // should be false
console.log(zipCode.test("123456")); // should be false

// 3. YOUR TURN: Match "yes" or "no" (exact, nothing else)
const yesOrNo = /^(yes|no)$/

console.log("Yes/No tests:");
console.log(yesOrNo.test("yes"));     // should be true
console.log(yesOrNo.test("no"));      // should be true
console.log(yesOrNo.test("maybe"));   // should be false
console.log(yesOrNo.test("yes!!"));   // should be false