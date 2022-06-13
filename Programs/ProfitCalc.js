/* jshint esversion: 6 */
// ProfitCalc.js
// Version: 1.0
// Date: 01/02/2022
// Description: This is a simple calculator that calculates the profit of dayTrading.

const prompt = require("prompt-sync")();

let baseNumber = prompt("Enter Base Number : "); // base number
let profitPercent = prompt("Enter ProfitPercentage : "); // profit percent
let commissionPercent = prompt("Enter The commissionPercent : "); // commission percent
let lossPercent = prompt("Enter The lossPercent : "); // loss percent
let numOfDays = prompt("Enter How Many Days : "); // number of days
let relesedProfit = profitPercent - commissionPercent - lossPercent; // released profit

let numOfWeeks = numOfDays / 7; // number of weeks
let marketClosedDays = numOfWeeks * 2; // market closed days
let marketOpenDays = numOfDays - marketClosedDays; // market open days
console.log(`-------------------------------------------------------------
   The base number is: ${baseNumber}
   The profit percent is: ${profitPercent}
   The commission percent is: ${commissionPercent}
   The total number of days in the interval of trading is : ${numOfDays}
-------------------------------------------------------------`);
// The total number of weeks in the interval of trading is : ${numOfWeeks}
// The market closed days is: ${marketClosedDays}
// The market open days is: ${marketOpenDays}
let z = 0;
for (let i = 1; i <= /*marketOpenDays*/ numOfDays; ++i) {
	z = baseNumber * (1 + relesedProfit); // calculate the profit
	baseNumber = z; // update the base number

	console.log(`${i}: ${baseNumber.toFixed(2)}`); // print the base number
}
