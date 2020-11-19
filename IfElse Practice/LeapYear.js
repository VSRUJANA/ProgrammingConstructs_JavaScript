// 3. Checking for leap year
const prompt = require('prompt-sync')();
var year = prompt('Enter year to check for leap year : ');
var isLeapYear = (year % 100 == 0) ? (year % 400 == 0) : (year % 4 == 0);
if (isLeapYear)
    console.log(year + " is a Leap year");
else
    console.log(year + " is not a Leap year");