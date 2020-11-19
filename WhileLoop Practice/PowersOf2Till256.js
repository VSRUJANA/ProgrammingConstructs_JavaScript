// 1. Print powers of 2 till 256 is reached
const Prompt = require('prompt-sync')();
let num = Number(Prompt('Enter Number : '));
let iterator = 1;
while (iterator <= num) 
{
    let result = Math.pow(2, iterator);
    if (result > 256)
        break;
    console.log("2 to the power " + iterator + " is " + result);
    iterator++;
}
