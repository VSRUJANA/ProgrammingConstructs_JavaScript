// 2. Read a number and display the Week day
const prompt = require('prompt-sync')();
const day = prompt('Enter a number between 1 to 7 : ');
if (day == 1) 
{
    console.log("Day is Sunday");
}
else if (day == 2) 
{
    console.log("Day is Monday");
}
else if (day == 3) 
{
    console.log("Day is Tuesday");
}
else if (day == 4) 
{
    console.log("Day is Wednesday");
}
else if (day == 5) 
{
    console.log("Day is Thursday");
}
else if (day == 6) 
{
    console.log("Day is Friday");
}
else if (day == 7) 
{
    console.log("Day is Saturday");
}
else 
{
    console.log("Invalid Number");
}