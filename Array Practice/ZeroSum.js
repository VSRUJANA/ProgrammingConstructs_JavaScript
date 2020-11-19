// 4. show Sum of three Integer adds to ZERO
const Prompt = require('prompt-sync')();
let arr = [];
let num1 = Number(Prompt('Enter Number1 : '));
arr.push(num1);
let num2 = Number(Prompt('Enter Number2 : '));
arr.push(num2);
let num3 = Number(Prompt('Enter Number3 : '));
arr.push(num3);
let sum = 0;
function Sum(num) 
{
    sum = sum + num;
}
arr.forEach(Sum);
if (sum == 0)
    console.log('Sum is Zero');
else
    console.log('Sum is not zero.');
