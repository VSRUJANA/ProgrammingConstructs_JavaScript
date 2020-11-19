// 4. Displaying Sum and Average of 5 numbers
let numbers = [];
for (i = 0; i < 5; i++) 
{
    numbers[i] = Math.floor((Math.random() * 100));
}
process.stdout.write("Numbers : ");
console.log(...numbers);
let sum = 0;
for (i = 0; i < 5; i++) 
{
    sum = sum + numbers[i];
}
console.log("Sum : " + sum);
console.log("Average : " + sum / 5);
console.log('-'.repeat(process.stdout.columns));