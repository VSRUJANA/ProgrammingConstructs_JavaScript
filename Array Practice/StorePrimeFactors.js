// 3. store all the Prime Factors of a number n into an array
const Prompt = require('prompt-sync')();
let num = Number(Prompt('Enter Number : '));
let arr = [];
for (let i = 2; i <= num; i++) 
{
    if (num % i === 0) 
    {
        if (isPrime(i))
            arr.push(i);
    }
}
console.log(arr);
function isPrime(num) 
{
    let is_prime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) 
    {
        if (num % i === 0)
            is_prime = false;
    }
    return is_prime;
}