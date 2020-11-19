// 4. Operations on numbers
const prompt = require('prompt-sync')();
const a = prompt('Enter First number  : ');
const b = prompt('Enter Second number : ');
const c = prompt('Enter Third number  : ');
let operations = [];
operations[0] = a + (b * c);
operations[1] = (a % b) + c;
operations[2] = c + (a / b);
operations[3] = (a * b) + c;
let maximum = Math.max(...operations);
let minimum = Math.min(...operations);
console.log("Maximum value is " + maximum);
console.log("Minimum value is " + minimum);
