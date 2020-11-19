// 2.Print nth harmonic number
const prompt = require('prompt-sync')();
let number = Number(prompt("Enter number to get its nth harmonic : "));
let harmonic = 0;
for (let i = 1; i <= number; i++)
{
        harmonic += 1 / i;
}
console.log("Harmonic sum is: " + harmonic);