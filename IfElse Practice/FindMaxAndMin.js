// 1.Displaying Max and min among 5 numbers
let numbers = [];
for (i = 0; i < 5; i++) 
{
    numbers[i] = Math.floor((Math.random() * 1000));
}
process.stdout.write("Numbers : ");
console.log(...numbers);
let max = Math.max(...numbers);
let min = Math.min(...numbers);
console.log("Maximum number : " + max);
console.log("Minimum number : " + min);