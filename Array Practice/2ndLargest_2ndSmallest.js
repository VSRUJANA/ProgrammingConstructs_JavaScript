// Find the 2nd largest and the 2nd smallest element without sorting the array.
let array = new Array();
while(array.length<10)
{
    let number= Math.floor(Math.random()*1000);
    if(number>=100 && number<=999)
    {
        array.push(number);
    }
}
// Print array
console.log(...array);
// Second largest number calculated
let max = Math.max.apply(null, array)
array.splice(array.indexOf(max), 1)
max = Math.max.apply(null, array);
console.log("Second Largest number  : " + max);
// Second smallest number calculated
let min = Math.min.apply(null, array)
array.splice(array.indexOf(min), 1)
min = Math.min.apply(null, array);
console.log("Second Smallest number : " + min);