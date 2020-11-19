// 3. Displaying one ten hundred
const prompt = require('prompt-sync')();
let num = Number(prompt('Enter Number : '));
let unit = 'unit';
switch(num)
{
    case 1:
        break;
    case 10:
        unit = 'Ten';
        break;
    case 100:
        unit = 'Hundred';
        break;
    case 1000:
        unit = 'Thousand';
        break;
    default:
        unit = 'Wrong input';
        break;
}
console.log("Number :" + unit);