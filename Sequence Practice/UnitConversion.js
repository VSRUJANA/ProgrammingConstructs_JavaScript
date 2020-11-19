// 5. Unit Conversion
function InchesToFeet(x) 
{
    return x / 12;
}
console.log("42 inches is equal to " + InchesToFeet(42) + " feet");

function FeetToMeter(x) 
{
    return x * 0.3048;
}
let length = FeetToMeter(60);
let breadth = FeetToMeter(40);
console.log("Rectangular plot of 60ft x 40ft in meters is equal to " + FeetToMeter(60) + "m x " + FeetToMeter(40) + "m");

function SquareMetersToAcres(x) 
{
    return (x / 4047).toFixed(4);
}
let areaOf25Plots = 25 * (length * breadth); // Area of 25 such plots in square meters
console.log("Area of 25 such plots in acres is " + SquareMetersToAcres(areaOf25Plots) + " acres");
