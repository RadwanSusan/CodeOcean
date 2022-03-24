// Program That Represents program execution:
let prompt = require("prompt-sync")();
// write a key value array with the memory address and the memory value
let table = {
	/*array of memory addresses and values*/
};
let memoryTable = {
	// memory address and memory value
	400: "2A3C",
	401: "2A3D",
	402: "2A3E",
	403: "2A3F",
	404: "2A40",
	405: "2A41",
	406: "2A42",
	407: "2A43",
	408: "2A44",
	409: "2A45",
	671: "0003",
	672: "0008",
	673: "0001",
};
console.table(memoryTable);
let accumulator = prompt("Enter the value of accumulator: "); // accumulator value
let programCounter = prompt("Enter the value of program counter: "); // program counter value
if (memoryTable[programCounter] == undefined) {
	// exit the program
	throw new Error("Memory address not found");
}
let opcode = prompt(
	"Enter opcode: ( 1 - ADDA, 2 - SUBA, 3 - STOA, 4 - LDA, 5 - MULA, 99 - exit ) : "
);
let counter = 0; // counter for the loop
while (opcode != 99) {
	if (opcode == 1) {
		// ADDA
		let choice = prompt(
			"Enter your choice for operand: ( 1 - value, 2 - address ) : "
		);
		if (choice == 1) {
			let operand = prompt("Enter operand value: Format=> (0000) "); // prompt for operand value
			let result = parseInt(accumulator, 16) + parseInt(operand, 16); // add the operand to the accumulator
			let resultHex = result.toString(16);
			resultHex = resultHex.toUpperCase(); // convert the result to hexadecimal
			let resultHexLength = resultHex.length; // get the length of the result
			if (resultHexLength == 1) {
				// if the length of the result is 1
				resultHex = "000" + resultHex; // add a leading zero
			} else if (resultHexLength == 2) {
				// if the length of the result is 2
				resultHex = "00" + resultHex; // add a leading zero
			} else if (resultHexLength == 3) {
				// if the length of the result is 3
				resultHex = "0" + resultHex; // add a leading zero
			}
			accumulator = resultHex; // set the accumulator to the result
			console.log("Accumulator: " + accumulator); // print the result
			// update the table
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		}
		if (choice == 2) {
			let operand = prompt("Enter operand address: "); // prompt for operand address
			let operandHex = memoryTable[operand]; // get the operand value
			let result = parseInt(accumulator, 16) + parseInt(operandHex, 16); // add the operand to the accumulator
			let resultHex = result.toString(16);
			resultHex = resultHex.toUpperCase(); // convert the result to hexadecimal
			let resultHexLength = resultHex.length; // get the length of the result
			if (resultHexLength == 1) {
				// if the length of the result is 1
				resultHex = "000" + resultHex; // add a leading zero
			} else if (resultHexLength == 2) {
				// if the length of the result is 2
				resultHex = "00" + resultHex; // add a leading zero
			} else if (resultHexLength == 3) {
				// if the length of the result is 3
				resultHex = "0" + resultHex; // add a leading zero
			}
			accumulator = resultHex; // set the accumulator to the result
			console.log("Accumulator: " + accumulator); // print the result
			// update the table
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		}
	} else if (opcode == 2) {
		// SUBA
		// if the opcode is 2
		let choice = prompt(
			"Enter your choice for operand: ( 1 - value, 2 - address ) : "
		);
		if (choice == 1) {
			let operand = prompt("Enter operand value - Format=> (0000): "); // prompt for operand value
			let result = parseInt(accumulator, 16) / parseInt(operand, 16); // devide the operand from the accumulator
			result = Math.trunc(result); // truncate the result
			let resultHex = result.toString(16);
			resultHex = resultHex.toUpperCase(); // convert the result to hexadecimal
			let resultHexLength = resultHex.length; // get the length of the result
			if (resultHexLength == 1) {
				// if the length of the result is 1
				resultHex = "000" + resultHex; // add a leading zero
			} else if (resultHexLength == 2) {
				// if the length of the result is 2
				resultHex = "00" + resultHex; // add a leading zero
			} else if (resultHexLength == 3) {
				// if the length of the result is 3
				resultHex = "0" + resultHex; // add a leading zero
			}
			accumulator = resultHex; // set the accumulator to the result
			console.log("Accumulator: " + accumulator); // print the result
			// update the table
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		} else if (choice == 2) {
			let operand = prompt("Enter operand address: "); // prompt for operand address
			let operandHex = memoryTable[operand]; // get the operand value
			let result = parseInt(accumulator, 16) / parseInt(operandHex, 16); // add the operand to the accumulator
			result = Math.trunc(result); // truncate the result
			let resultHex = result.toString(16);
			resultHex = resultHex.toUpperCase(); // convert the result to hexadecimal
			let resultHexLength = resultHex.length; // get the length of the result
			if (resultHexLength == 1) {
				// if the length of the result is 1
				resultHex = "000" + resultHex; // add a leading zero
			} else if (resultHexLength == 2) {
				// if the length of the result is 2
				resultHex = "00" + resultHex; // add a leading zero
			} else if (resultHexLength == 3) {
				// if the length of the result is 3
				resultHex = "0" + resultHex; // add a leading zero
			}
			accumulator = resultHex; // set the accumulator to the result
			console.log("Accumulator: " + accumulator); // print the result
			// update the table
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		} else {
			console.log("Invalid choice"); // print invalid choice
		}
	} else if (opcode == 3) {
		// STOA
		// if the opcode is 3
		let address = prompt("Enter operand (address): "); // prompt for operand
		console.log("Accumulator: " + accumulator); // print the result
		// update the the memory table
		memoryTable[parseInt(address)] = accumulator;
		// update the table
		table[counter] = {
			PC: programCounter,
			IR: memoryTable[programCounter],
			AC: accumulator,
		};
	} else if (opcode == 4) {
		// LDA
		// if the opcode is 4
		let choice = prompt(
			"Enter your choice for operand: ( 1 - value, 2 - address ) : "
		);
		if (choice == 1) {
			let operand = prompt("Enter operand value: Format=> (0000) "); // prompt for operand value
			accumulator = operand; // set the accumulator to the result
			accumulator = accumulator.toUpperCase(); // convert the result to hexadecimal
			console.log("Accumulator: " + accumulator); // print the result
			// update the table
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		} else if (choice == 2) {
			let operand = prompt("Enter operand address: "); // prompt for operand address
			let operandHex = memoryTable[operand]; // get the operand value
			accumulator = operandHex; // set the accumulator to the result
			accumulator = accumulator.toUpperCase(); // convert the result to hexadecimal
			console.log("Accumulator: " + accumulator); // print the result
			// update the table
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		} else {
			console.log("Invalid choice"); // print invalid choice
		}
	} else if (opcode == 5) {
		// MULA
		// if the opcode is 5
		let choice = prompt(
			"Enter your choice for operand: ( 1 - value, 2 - address ) : "
		);
		if (choice == 1) {
			let operand = prompt("Enter operand value: Format=> (0000) "); // prompt for operand value
			let result = parseInt(accumulator, 16) * parseInt(operand, 16); // add the operand to the accumulator
			let resultHex = result.toString(16);
			resultHex = resultHex.toUpperCase(); // convert the result to hexadecimal
			let resultHexLength = resultHex.length; // get the length of the result
			if (resultHexLength == 1) {
				// if the length of the result is 1
				resultHex = "000" + resultHex; // add a leading zero
			} else if (resultHexLength == 2) {
				// if the length of the result is 2
				resultHex = "00" + resultHex; // add a leading zero
			} else if (resultHexLength == 3) {
				// if the length of the result is 3
				resultHex = "0" + resultHex; // add a leading zero
			}
			accumulator = resultHex; // set the accumulator to the result
			console.log("Accumulator: " + accumulator); // print the result
			// update the table
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		} else if (choice == 2) {
			let operand = prompt("Enter operand address: "); // prompt for operand address
			let operandHex = memoryTable[operand]; // get the operand value
			let result = parseInt(accumulator, 16) * parseInt(operandHex, 16); // add the operand to the accumulator
			let resultHex = result.toString(16);
			resultHex = resultHex.toUpperCase(); // convert the result to hexadecimal
			let resultHexLength = resultHex.length; // get the length of the result
			if (resultHexLength == 1) {
				// if the length of the result is 1
				resultHex = "000" + resultHex; // add a leading zero
			} else if (resultHexLength == 2) {
				// if the length of the result is 2
				resultHex = "00" + resultHex; // add a leading zero
			} else if (resultHexLength == 3) {
				// if the length of the result is 3
				resultHex = "0" + resultHex; // add a leading zero
			}
			accumulator = resultHex; // set the accumulator to the result
			console.log("Accumulator: " + accumulator); // print the result
			// update the table
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		} else {
			console.log("Invalid choice"); // print invalid choice
		}
	} else {
		// if the opcode is not 1, 2, 3, 4, 5
		console.log("Invalid opcode"); // print the result
	}
	++counter;
	++programCounter;
	programCounter = programCounter.toString(); // convert the program counter to string
	opcode = prompt(
		"Enter opcode: ( 1 - ADDA, 2 - SUBA, 3 - STOA, 4 - LDA, 5 - MULA, 99 - exit ) : "
	);
}
console.log("--------------------------------------------------------\n\n");
console.table(memoryTable);
console.log("\n\n");
console.table(table);
