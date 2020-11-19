// 1. Conversion of Temperature to celsius or fahrenheit
const Prompt = require('prompt-sync')();
console.log("1. Convert Fahrenheit to Celsius \n2. Convert Celsius to Fahrenheit");
let choice = Number(Prompt('Enter choice : '));
switch (choice) 
{
    case 1:
        FahrenheitToCelsius();
        break;
    case 2:
        CelsiusToFahrenheit();
        break;
    default:
        console.log("Invalid choice");
        break;
}
function CelsiusToFahrenheit()
{
    let degC = Number(Prompt('Enter temperature in celsius : '));
    if (degC >= 0 && degC <= 100)
    {
        let degF = (degC * (9 / 5)) + 32;
        console.log(degC + " in celsius is equal to " + degF + " in Fahrenheits");    
    }
    else
    {
        console.log("Temperature is not in correct range!");
    }
}
async function FahrenheitToCelsius()
{
    let degF = Number(Prompt('Enter temperature in Fahrenheits : '));    
    if (degF >= 32 && degF <= 212)
    {
        let degC = (degF - 32) * (5 / 9);
        console.log(degF + " in Fahrenheits is equal to " + degC + " in celsius");    
    }
    else
    {
        console.log("Temperature not in correct range!");
    }
}