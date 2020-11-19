// 5. Unit Conversion
const prompt = require('prompt-sync')();
console.log('Choices : \n1. Feet to Inch\n2. Feet to Meter\n3. Inch To Meter\n4. Meter to Feet');
let input = Number(prompt('Enter Choices : '));
let num =  Number(prompt('Enter Number : '));
let converted;
switch(input)
{
    case 1:
        converted = num * 12;
        break;
    case 2:
        converted = num * 0.305;
        break;
    case 3:
        converted = num * 0.0254;
        break;
    case 4:
        converted = num * 3.28084;
        break;
    default:
        converted = 'Wrong Input';
        break;
}
console.log(converted);
