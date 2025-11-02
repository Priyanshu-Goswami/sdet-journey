function isValidEmail(email) {
    //Email must not be blank
    if(!email || email.length === 0) return false; 
    //Email must not contain spaces 
    if(email.includes(" ")) return false;
    //must contain only one @
    if((email.split("@").length - 1) !== 1) return false;

    let emailPart = email.split("@");
    let localPart = emailPart[0];
    let domainPart = emailPart[1];
    // localPart not empty
    if(localPart.length === 0) return false; 
    //domain part should contain atlease one .
    if(!domainPart || !domainPart.includes(".")) return false; 
    //domain should not end or start with a .
    if(domainPart.endsWith(".") || domainPart.startsWith(".")) return false;
    //domain should end with something like .com or .in
    let domainParts = domainPart.split(".");
    if(domainParts[domainParts.length - 1].length === 0) return false;

    return true;
}

//TestCases

const tests = [
    { email: "test@example.com", expected: true },
    { email: "user.name@domain.co.in", expected: true },
    { email: "invalid.email", expected: false },
    { email: "test@", expected: false },
    { email: "@example.com", expected: false },
    { email: "", expected: false },
    { email: "test@@example.com", expected: false },
    { email: "test@domain", expected: false },
    { email: "test @example.com", expected: false },
    { email: "test@exam ple.com", expected: false }
];

let passed = 0;
let failed = 0;

console.log("🧪 Running Email Validator Tests:\n");
tests.forEach((test, index) => {
    const result = isValidEmail(test.email);
    const status = result === test.expected ? "✅ PASS" : "❌ FAIL";
    if(result === test.expected) passed++; else failed++;
    console.log(`Test ${index + 1}: ${status} - "${test.email}"`);
});

console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);
