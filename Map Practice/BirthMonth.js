// 2. Find all the individuals having birthdays in the same month.
let map = new Map();
for (let person = 1; person <= 50; person++) 
{
    let birthMonth = Math.floor(Math.random() * 11);
    birthMonth++;
    if (map.has(birthMonth)) 
    {
        map.get(birthMonth).push(person);
    }
    else 
    {
        map.set(birthMonth, [person]);
    }
}
for (let [key, value] of map) 
{
    console.log('People with birthday in month ' + key + ' : ' + String(value));
}