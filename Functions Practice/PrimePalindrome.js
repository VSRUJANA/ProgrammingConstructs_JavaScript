// 3. check if the number is a Prime. If yes, check if its palindrome is also prime
const Prompt = require('prompt-sync')();
let num = Number(Prompt('Enter Number : '));
if (isPrime(num) == true) 
{
    console.log(num + " is a prime number");
    var palindrome = GetPalindrome(num);
    if (isPrime(palindrome))
        console.log("Its palindrome, " + palindrome + " is also prime");
    else
        console.log("Its palindrome, " + palindrome + " is not a prime number");
}
else 
{
    console.log(num + " is not a prime number");
}

function GetPalindrome(num) 
{
    let number = String(num);
    let palindrome = number[number.length - 1];
    for (let len = 1; len < number.length; len++) 
    {
        palindrome = palindrome.concat(number.charAt(number.length - 1 - len));
    }
    return Number(palindrome);
}

function isPrime(num) {
    let is_prime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) 
    {
        if (num % i === 0)
            is_prime = false;
    }
    return is_prime;
}
