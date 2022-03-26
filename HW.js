// jshint esversion:6
let prompt = require("prompt-sync")();
let table = {};
let memoryTable = {
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
let accumulator = prompt("Enter the value of accumulator: ");
let programCounter = prompt("Enter the value of program counter: ");
if (memoryTable[programCounter] == undefined) {
	throw new Error("Memory address not found");
}
let opcode = prompt(
	"Enter opcode: ( 1 - ADDA, 2 - SUBA, 3 - STOA, 4 - LDA, 5 - MULA, 6 - ANDA, 7 - ORA, 8 - NORA, 9 - XORA, 10 - XNORA, 11 - NOTA, 12 - DIVA, 99 - exit ) : "
);
let counter = 0;
let hexCompliment = (str) => {
	let i;
	let complement = "";
	for (i = 0; i < str.length; i++) {
		switch (str[i]) {
			case "0":
				complement += "f";
				break;
			case "1":
				complement += "e";
				break;
			case "2":
				complement += "d";
				break;
			case "3":
				complement += "c";
				break;
			case "4":
				complement += "b";
				break;
			case "5":
				complement += "a";
				break;
			case "6":
				complement += "9";
				break;
			case "7":
				complement += "8";
				break;
			case "8":
				complement += "7";
				break;
			case "9":
				complement += "6";
				break;
			case "A":
				complement += "5";
				break;
			case "B":
				complement += "4";
				break;
			case "C":
				complement += "3";
				break;
			case "D":
				complement += "2";
				break;
			case "E":
				complement += "1";
				break;
			case "F":
				complement += "0";
				break;
		}
	}
	return complement;
};
let bitwiseAND = (str1, str2) => {
	var num1 = parseInt(str1, 16);
	var num2 = parseInt(str2, 16);
	var result = num1 & num2;
	return result.toString(16);
};
let BitwiseOR = (str1, str2) => {
	var num1 = parseInt(str1, 16);
	var num2 = parseInt(str2, 16);
	var result = num1 | num2;
	return result.toString(16);
};
let BitwiseNOR = (str1, str2) => {
	var num1 = parseInt(str1, 16);
	var num2 = parseInt(str2, 16);
	var result = num1 | num2;
	result.toString(16);
	if (result.length == 1) {
		result = "000" + result;
	} else if (result.length == 2) {
		result = "00" + result;
	} else if (result.length == 3) {
		result = "0" + result;
	}
	return hexCompliment(result);
};
let BitwiseXOR = (str1, str2) => {
	var num1 = parseInt(str1, 16);
	var num2 = parseInt(str2, 16);
	var result = num1 ^ num2;
	return result.toString(16);
};
let BitwiseXNOR = (str1, str2) => {
	var num1 = parseInt(str1, 16);
	var num2 = parseInt(str2, 16);
	var result = num1 ^ num2;
	result = result.toString(16);
	if (result.length == 1) {
		result = "000" + result;
	} else if (result.length == 2) {
		result = "00" + result;
	} else if (result.length == 3) {
		result = "0" + result;
	}
	return hexCompliment(result);
};
while (opcode != 99) {
	if (opcode == 1) {
		let choice = prompt(
			"Enter your choice for operand: ( 1 - value, 2 - address ) : "
		);
		if (choice == 1) {
			let operand = prompt("Enter operand value - Format=> (0000): ");
			let result = parseInt(accumulator, 16) + parseInt(operand, 16);
			let resultHex = result.toString(16);
			resultHex = resultHex.toUpperCase();
			let resultHexLength = resultHex.length;
			if (resultHexLength == 1) {
				resultHex = "000" + resultHex;
			} else if (resultHexLength == 2) {
				resultHex = "00" + resultHex;
			} else if (resultHexLength == 3) {
				resultHex = "0" + resultHex;
			}
			accumulator = resultHex;
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		}
		if (choice == 2) {
			let operand = prompt("Enter operand address: ");
			let operandHex = memoryTable[operand];
			let result = parseInt(accumulator, 16) + parseInt(operandHex, 16);
			let resultHex = result.toString(16);
			resultHex = resultHex.toUpperCase();
			let resultHexLength = resultHex.length;
			if (resultHexLength == 1) {
				resultHex = "000" + resultHex;
			} else if (resultHexLength == 2) {
				resultHex = "00" + resultHex;
			} else if (resultHexLength == 3) {
				resultHex = "0" + resultHex;
			}
			accumulator = resultHex;
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		}
	} else if (opcode == 2) {
		let choice = prompt(
			"Enter your choice for operand: ( 1 - value, 2 - address ) : "
		);
		if (choice == 1) {
			let operand = prompt("Enter operand value - Format=> (0000): ");
			let result = parseInt(accumulator, 16) - parseInt(operand, 16);
			let resultHex = result.toString(16);
			resultHex = resultHex.toUpperCase();
			let resultHexLength = resultHex.length;
			if (resultHexLength == 1) {
				resultHex = "000" + resultHex;
			} else if (resultHexLength == 2) {
				resultHex = "00" + resultHex;
			} else if (resultHexLength == 3) {
				resultHex = "0" + resultHex;
			}
			accumulator = resultHex;
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		} else if (choice == 2) {
			let operand = prompt("Enter operand address: ");
			let operandHex = memoryTable[operand];
			let result = parseInt(accumulator, 16) - parseInt(operandHex, 16);
			result = Math.trunc(result);
			let resultHex = result.toString(16);
			resultHex = resultHex.toUpperCase();
			let resultHexLength = resultHex.length;
			if (resultHexLength == 1) {
				resultHex = "000" + resultHex;
			} else if (resultHexLength == 2) {
				resultHex = "00" + resultHex;
			} else if (resultHexLength == 3) {
				resultHex = "0" + resultHex;
			}
			accumulator = resultHex;
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		} else {
			console.log("Invalid choice");
		}
	} else if (opcode == 3) {
		let address = prompt("Enter operand (address): ");
		console.log("Accumulator: " + accumulator);
		memoryTable[parseInt(address)] = accumulator;
		table[counter] = {
			PC: programCounter,
			IR: memoryTable[programCounter],
			AC: accumulator,
		};
	} else if (opcode == 4) {
		let choice = prompt(
			"Enter your choice for operand: ( 1 - value, 2 - address ) : "
		);
		if (choice == 1) {
			let operand = prompt("Enter operand value - Format=> (0000): ");
			accumulator = operand;
			accumulator = accumulator.toUpperCase();
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		} else if (choice == 2) {
			let operand = prompt("Enter operand address: ");
			let operandHex = memoryTable[operand];
			accumulator = operandHex;
			accumulator = accumulator.toUpperCase();
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		} else {
			console.log("Invalid choice");
		}
	} else if (opcode == 5) {
		let choice = prompt(
			"Enter your choice for operand: ( 1 - value, 2 - address ) : "
		);
		if (choice == 1) {
			let operand = prompt("Enter operand value - Format=> (0000): ");
			let result = parseInt(accumulator, 16) * parseInt(operand, 16);
			let resultHex = result.toString(16);
			resultHex = resultHex.toUpperCase();
			let resultHexLength = resultHex.length;
			if (resultHexLength == 1) {
				resultHex = "000" + resultHex;
			} else if (resultHexLength == 2) {
				resultHex = "00" + resultHex;
			} else if (resultHexLength == 3) {
				resultHex = "0" + resultHex;
			}
			accumulator = resultHex;
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		} else if (choice == 2) {
			let operand = prompt("Enter operand address: ");
			let operandHex = memoryTable[operand];
			let result = parseInt(accumulator, 16) * parseInt(operandHex, 16);
			let resultHex = result.toString(16);
			resultHex = resultHex.toUpperCase();
			let resultHexLength = resultHex.length;
			if (resultHexLength == 1) {
				resultHex = "000" + resultHex;
			} else if (resultHexLength == 2) {
				resultHex = "00" + resultHex;
			} else if (resultHexLength == 3) {
				resultHex = "0" + resultHex;
			}
			accumulator = resultHex;
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		} else {
			console.log("Invalid choice");
		}
	} else if (opcode == 6) {
		let choice = prompt(
			"Enter your choice for operand: ( 1 - value, 2 - address ) : "
		);
		if (choice == 1) {
			let operand = prompt("Enter operand value - Format=> (0000): ");
			let result = bitwiseAND(accumulator, operand);
			resultHex = result.toUpperCase();
			let resultHexLength = resultHex.length;
			if (resultHexLength == 1) {
				resultHex = "000" + resultHex;
			} else if (resultHexLength == 2) {
				resultHex = "00" + resultHex;
			} else if (resultHexLength == 3) {
				resultHex = "0" + resultHex;
			}
			accumulator = resultHex;
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		} else if (choice == 2) {
			let operand = prompt("Enter operand address: ");
			let operandHex = memoryTable[operand];
			let result = bitwiseAND(accumulator, operandHex);
			resultHex = result.toUpperCase();
			let resultHexLength = resultHex.length;
			if (resultHexLength == 1) {
				resultHex = "000" + resultHex;
			} else if (resultHexLength == 2) {
				resultHex = "00" + resultHex;
			} else if (resultHexLength == 3) {
				resultHex = "0" + resultHex;
			}
			accumulator = resultHex;
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		}
	} else if (opcode == 7) {
		let choice = prompt(
			"Enter your choice for operand: ( 1 - value, 2 - address ) : "
		);
		if (choice == 1) {
			let operand = prompt("Enter operand value - Format=> (0000): ");
			let result = bitwiseOR(accumulator, operand);
			resultHex = result.toUpperCase();
			let resultHexLength = resultHex.length;
			if (resultHexLength == 1) {
				resultHex = "000" + resultHex;
			} else if (resultHexLength == 2) {
				resultHex = "00" + resultHex;
			} else if (resultHexLength == 3) {
				resultHex = "0" + resultHex;
			}
			accumulator = resultHex;
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		}
		if (choice == 2) {
			let operand = prompt("Enter operand address: ");
			let operandHex = memoryTable[operand];
			let result = bitwiseOR(accumulator, operandHex);
			resultHex = result.toUpperCase();
			let resultHexLength = resultHex.length;
			if (resultHexLength == 1) {
				resultHex = "000" + resultHex;
			} else if (resultHexLength == 2) {
				resultHex = "00" + resultHex;
			} else if (resultHexLength == 3) {
				resultHex = "0" + resultHex;
			}
			accumulator = resultHex;
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		}
	} else if (opcode == 8) {
		let choice = prompt(
			"Enter your choice for operand: ( 1 - value, 2 - address ) : "
		);
		if (choice == 1) {
			let operand = prompt("Enter operand value - Format=> (0000): ");
			let result = BitwiseNOR(accumulator, operand);
			resultHex = result.toUpperCase();
			let resultHexLength = resultHex.length;
			if (resultHexLength == 1) {
				resultHex = "000" + resultHex;
			} else if (resultHexLength == 2) {
				resultHex = "00" + resultHex;
			} else if (resultHexLength == 3) {
				resultHex = "0" + resultHex;
			}
			accumulator = resultHex;
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		}
		if (choice == 2) {
			let operand = prompt("Enter operand address: ");
			let operandHex = memoryTable[operand];
			let result = BitwiseNOR(accumulator, operandHex);
			resultHex = result.toUpperCase();
			let resultHexLength = resultHex.length;
			if (resultHexLength == 1) {
				resultHex = "000" + resultHex;
			} else if (resultHexLength == 2) {
				resultHex = "00" + resultHex;
			} else if (resultHexLength == 3) {
				resultHex = "0" + resultHex;
			}
			accumulator = resultHex;
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		}
	} else if (opcode == 9) {
		let choice = prompt(
			"Enter your choice for operand: ( 1 - value, 2 - address ) : "
		);
		if (choice == 1) {
			let operand = prompt("Enter operand value - Format=> (0000): ");
			let result = bitwiseXOR(accumulator, operand);
			resultHex = result.toUpperCase();
			let resultHexLength = resultHex.length;
			if (resultHexLength == 1) {
				resultHex = "000" + resultHex;
			} else if (resultHexLength == 2) {
				resultHex = "00" + resultHex;
			} else if (resultHexLength == 3) {
				resultHex = "0" + resultHex;
			}
			accumulator = resultHex;
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		}
		if (choice == 2) {
			let operand = prompt("Enter operand address: ");
			let operandHex = memoryTable[operand];
			let result = bitwiseXOR(accumulator, operandHex);
			resultHex = result.toUpperCase();
			let resultHexLength = resultHex.length;
			if (resultHexLength == 1) {
				resultHex = "000" + resultHex;
			} else if (resultHexLength == 2) {
				resultHex = "00" + resultHex;
			} else if (resultHexLength == 3) {
				resultHex = "0" + resultHex;
			}
			accumulator = resultHex;
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		}
	} else if (opcode == 10) {
		let choice = prompt(
			"Enter your choice for operand: ( 1 - value, 2 - address ) : "
		);
		if (choice == 1) {
			let operand = prompt("Enter operand value - Format=> (0000): ");
			let result = BitwiseXNOR(accumulator, operand);
			resultHex = result.toUpperCase();
			let resultHexLength = resultHex.length;
			if (resultHexLength == 1) {
				resultHex = "000" + resultHex;
			} else if (resultHexLength == 2) {
				resultHex = "00" + resultHex;
			} else if (resultHexLength == 3) {
				resultHex = "0" + resultHex;
			}
			accumulator = resultHex;
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		}
		if (choice == 2) {
			let operand = prompt("Enter operand address: ");
			let operandHex = memoryTable[operand];
			let result = BitwiseXNOR(accumulator, operand);
			resultHex = result.toUpperCase();
			let resultHexLength = resultHex.length;
			if (resultHexLength == 1) {
				resultHex = "000" + resultHex;
			} else if (resultHexLength == 2) {
				resultHex = "00" + resultHex;
			} else if (resultHexLength == 3) {
				resultHex = "0" + resultHex;
			}
			accumulator = resultHex;
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		}
	} else if (opcode == 11) {
		let result = hexCompliment(accumulator);
		resultHex = result.toUpperCase();
		if (resultHex.length == 1) {
			resultHex = "000" + resultHex;
		} else if (resultHex.length == 2) {
			resultHex = "00" + resultHex;
		} else if (resultHex.length == 3) {
			resultHex = "0" + resultHex;
		}
		accumulator = resultHex;
		console.log("Accumulator: " + accumulator);
		table[counter] = {
			PC: programCounter,
			IR: memoryTable[programCounter],
			AC: accumulator,
		};
	} else if (opcode == 12) {
		let choice = prompt(
			"Enter your choice for operand: ( 1 - value, 2 - address ) : "
		);
		if (choice == 1) {
			let operand = prompt("Enter operand value - Format=> (0000): ");
			let result = parseInt(accumulator, 16) / parseInt(operand, 16);
			result = Math.trunc(result);
			let resultHex = result.toString(16);
			resultHex = resultHex.toUpperCase();
			let resultHexLength = resultHex.length;
			if (resultHexLength == 1) {
				resultHex = "000" + resultHex;
			} else if (resultHexLength == 2) {
				resultHex = "00" + resultHex;
			} else if (resultHexLength == 3) {
				resultHex = "0" + resultHex;
			}
			accumulator = resultHex;
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		}
		if (choice == 2) {
			let operand = prompt("Enter operand address: ");
			let operandHex = memoryTable[operand];
			let result = parseInt(accumulator, 16) / parseInt(operandHex, 16);
			result = Math.trunc(result);
			let resultHex = result.toString(16);
			resultHex = resultHex.toUpperCase();
			let resultHexLength = resultHex.length;
			if (resultHexLength == 1) {
				resultHex = "000" + resultHex;
			} else if (resultHexLength == 2) {
				resultHex = "00" + resultHex;
			} else if (resultHexLength == 3) {
				resultHex = "0" + resultHex;
			}
			accumulator = resultHex;
			console.log("Accumulator: " + accumulator);
			table[counter] = {
				PC: programCounter,
				IR: memoryTable[programCounter],
				AC: accumulator,
			};
		}
	} else {
		console.log("Invalid opcode");
	}
	++counter;
	++programCounter;
	programCounter = programCounter.toString();
	opcode = prompt(
		"Enter opcode: ( 1 - ADDA, 2 - SUBA, 3 - STOA, 4 - LDA, 5 - MULA, 6 - ANDA, 7 - ORA, 8 - NORA, 9 - XORA, 10 - XNORA, 11 - NOTA, 12 - DIVA, 99 - exit ) : "
	);
}
console.log("--------------------------------------------------------\n\n");
console.table(memoryTable);
console.log("\n\n");
console.table(table);
