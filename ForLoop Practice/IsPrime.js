// 3.Check if number is prime
const Prompt = require('prompt-sync')();
let num = Number(Prompt('Enter Number : '));
let is_prime = true;
if (num == 1)
{
    console.log("1 is neither prime nor composite");
    process.exit(0);
}
for (let i = 2; i <= Math.sqrt(num); i++)
{
    if (num % i == 0)
        is_prime = false;
}
if (is_prime)
    console.log(num + " is a Prime number");
else
    console.log(num + " is not Prime number");