// Read a number from user and print powers of 2 ≤ 2^n"
const prompt = require('prompt-sync')();
let input = Number(prompt('Enter a Number : '));
let result = 1;
for(let iterator = 1; iterator <= input; iterator++)
{
    result = result*2;
    console.log("2 to the power " + iterator + " is " + result);
}