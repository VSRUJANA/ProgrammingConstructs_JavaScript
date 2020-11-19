// 4. Gambler Game
let rupees = 100;
let noOfWins = 0;
let noOfBets = 0;
while (rupees > 0 && rupees <= 200) 
{
    let result = Math.floor(Math.random() * 10) % 2;
    noOfBets++;
    if (result == 0)
        rupees--;
    else 
    {
        noOfWins++;
        rupees++;
    }
}
if (rupees == 0)
    console.log("Gambler Broke");
else
    console.log("Gambler Won");
console.log("Final Money: " + rupees);
console.log("Number of Bets : " + noOfBets);
console.log("Number of Wins : " + noOfWins); 