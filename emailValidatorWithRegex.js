function isValidEmail(email) {
    let regexPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexPattern.test(email);
}

console.log("✅ Valid emails:");
console.log("test@example.com:", isValidEmail("test@example.com"));
console.log("first.last@domain.org:", isValidEmail("first.last@domain.org"));
console.log("user_name@sub.domain.com:", isValidEmail("user_name@sub.domain.com"));
console.log("test-user@my-domain.co.in:", isValidEmail("test-user@my-domain.co.in"));

console.log("\n❌ Invalid emails:");
console.log("test!@example.com:", isValidEmail("test!@example.com"));
console.log("user@domain_name.com:", isValidEmail("user@domain_name.com"));
console.log("test@example.c:", isValidEmail("test@example.c"));
console.log("test @example.com:", isValidEmail("test @example.com"));