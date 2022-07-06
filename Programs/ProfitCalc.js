// jshint esversion: 6
const prompt = require("prompt-sync")();

let baseNumber = prompt("Enter Base Number : ");
let profitPercent = prompt("Enter ProfitPercentage : ");
let commissionPercent = prompt("Enter The commissionPercent : ");
let lossPercent = prompt("Enter The lossPercent : ");
let numOfDays = prompt("Enter How Many Days : ");
let relesedProfit = profitPercent - commissionPercent - lossPercent;

let numOfWeeks = numOfDays / 7;
let marketClosedDays = numOfWeeks * 2;
let marketOpenDays = numOfDays - marketClosedDays;

console.log(`-------------------------------------------------------------
   The base number is: ${baseNumber}
   The profit percent is: ${profitPercent}
   The commission percent is: ${commissionPercent}
   The total number of days in the interval of trading is : ${numOfDays}
-------------------------------------------------------------`);

let z;
for (let i = 1; i <= numOfDays; ++i) {
	z = baseNumber * (1 + relesedProfit);
	baseNumber = z;
	console.log(`${i}: ${baseNumber.toFixed(2)}`);
}
