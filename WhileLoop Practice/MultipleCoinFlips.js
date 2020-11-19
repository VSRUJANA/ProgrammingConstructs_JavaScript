// Flip Coin till either Heads or Tails wins 11 times.  
let countH = 0;
let countT = 0;
while (countH <= 11 && countT <= 11) 
{
    let flip = Math.floor(Math.random() * 10) % 2;
    if (flip == 1)
        countH++;
    else
        countT++;
}
if (countH == 11)
    console.log("Heads won 11 times!");
else
    console.log("Tails won 11 times!");