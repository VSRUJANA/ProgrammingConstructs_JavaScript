// 1. Dice Roll
let map = new Map();
let max = 0;
let min = 6;
map.set(1, 0);
map.set(2, 0);
map.set(3, 0);
map.set(4, 0);
map.set(5, 0);
map.set(6, 0)
while (true) 
{
    let dieRoll = Math.floor(Math.random() * 10) % 7;
    let temp = map.get(dieRoll);
    map.set(dieRoll, ++temp);
    if (map.get(dieRoll) < map.get(min))
        min = dieRoll;
    if (map.get(dieRoll) == 10) 
    {
        max = dieRoll;
        break;
    }
}
console.log('Max number : ', max);
console.log('Min Number : ', min);