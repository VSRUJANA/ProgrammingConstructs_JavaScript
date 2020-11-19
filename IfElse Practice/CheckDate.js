// 2.checking date
var startDate = new Date();
startDate.setDate(20);
startDate.setMonth(3);
var endDate = new Date();
endDate.setMonth(6);
endDate.setDate(20);
// Take date from user
var userInput = new Date();
const prompt = require('prompt-sync')();
const month = prompt('Enter month :');
userInput.setMonth(month);
const date = prompt('Enter date  :');
userInput.setDate(date);
// Compare dates
if (userInput > startDate && userInput < endDate)
    console.log("True! Date lies between March 20 and June 20");
else
    console.log("False! Date doesnot lie between March 20 and June 20");