// 2. Check if two numbers is palindrome or not
const Prompt = require('prompt-sync')();
let num1 = Number(Prompt('Enter Number1 : '));
let num2 = Number(Prompt('Enter Number2 : '));
if (IsPalindrome(num1, num2))
    console.log("Two numbers are palindromes!");
else
    console.log("Two numbers are not palindromes!");
function IsPalindrome(num1, num2) 
{

    let snum1 = String(num1);
    let snum2 = String(num2);
    if (snum1.length != snum2.length)
        return false;
    let isPalindrome = true;
    for (let len = 0; len < snum1.length; len++) 
    {
        if (snum1[len] != snum2[snum2.length - len - 1])
            isPalindrome = false;
    }
    return isPalindrome;
}
