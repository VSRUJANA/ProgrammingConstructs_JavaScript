// 3. Add two random dice number and print the result
let a = Math.floor(Math.random() * 10) % 7;
let b = Math.floor(Math.random() * 10) % 7;
console.log("Addition of " + a + " and " + b + " : " + (a + b));
console.log('-'.repeat(process.stdout.columns));