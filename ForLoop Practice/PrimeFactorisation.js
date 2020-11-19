// 6. Calculate factors of a number using Prime Factorisation
function primeFactorize(number) 
{
    let factors = [];
    for (k = 1; k <= number / 2; k++) 
    {
        if (number % k === 0) 
        {
            factors.push(k);
        }
    }
    console.log("Factors of " + number + " : ");
    console.log(...factors);
}
const Prompt = require('prompt-sync')();
let number = Number(Prompt("Enter number to calculate its factors : "));
primeFactorize(number);