// 5. Find numbers with repeated digits in the range from 0 – 100 and store them in an array
let array = new Array();
for(let iterator = 1; iterator<=100; iterator++)
{
    if(iterator%11==0)
    array.push(iterator);
}
console.log(array);