// 2. Find the Magic Number
console.log("Think of a number between 1 and 100");
    let start = 0;
    let end = 100;
    let magicNumber = 0;
    let isNumber = false;
    while(isNumber != true)
    {
        magicNumber = Math.round((start + end) / 2);
        console.log("Press \n1. If your number is greater than " + magicNumber);
        console.log("2. If your number is less than " + magicNumber);
        console.log("3. If  " + magicNumber + " is your number");
        const Prompt = require('prompt-sync')();
        let choice = Number(Prompt('Enter Number : '));
        switch (choice) 
        {
            case 1:
                start = magicNumber;
                break;
            case 2:
                end = magicNumber;
                break;
            case 3:
                isNumber = true;
                break;
            default:
                console.log("Invalid choice!");
                break;
        }
    }
    console.log("The no. you thought was: "+ magicNumber);