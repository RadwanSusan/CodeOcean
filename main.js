// jshint esversion: 6
// const prompt = require("./node_modules/prompt-sync/index")();

// let InstructionCounter = [];
// let instruction = [];
// let ProgramCounter = [];
// ProgramCounter.push(prompt("Enter Program Counter: "));
// let IR = [];
// let accumulator = [];
// accumulator.push(prompt("Enter accumulator: "));
// let opcode = prompt(
// 	"Enter opcode: ( 1 - ADDA, 2 - SUBA, 3 - STOA, 4 - LDA, 5 - MULA, 99 - exit )"
// );
// let counter = 0;

// let ADDA = (IR) => {
// 	accumulator = accumulator + IR;
// 	return accumulator;
// };
// let SUBA = (IR) => {
// 	accumulator = accumulator - IR;
// 	return accumulator;
// };
// let STOA = (IR) => {
// 	accumulator = IR;
// 	return accumulator;
// };
// let LDA = (IR) => {
// 	accumulator = IR;
// 	return accumulator;
// };
// let MULA = (IR) => {
// 	accumulator = accumulator * IR;
// 	return accumulator;
// };

// let main = () => {
// 	while (opcode != 99) {
// 		++counter;
// 		InstructionCounter.push(counter);
// 		if (opcode == 1) {
// 			let operand1 = prompt("Enter operand 1: ");
// 			let operand2 = prompt("Enter operand 2: ");
// 			instruction.push(operand1, operand2);
// 			IR = instruction;
// 			accumulator.push(ADDA(IR));
// 			instruction = [];
// 		} else if (opcode == 2) {
// 			let operand1 = prompt("Enter operand 1: ");
// 			let operand2 = prompt("Enter operand 2: ");
// 			instruction.push(operand1, operand2);
// 			IR = instruction;
// 			accumulator.push(SUBA(IR));
// 			instruction = [];
// 		} else if (opcode == 3) {
// 			let operand1 = prompt("Enter operand 1: ");
// 			let operand2 = prompt("Enter operand 2: ");
// 			instruction.push(operand1, operand2);
// 			IR.push(instruction);
// 			STOA(IR);
// 			instruction = [];
// 		} else if (opcode == 4) {
// 			let operand1 = prompt("Enter operand 1: ");
// 			let operand2 = prompt("Enter operand 2: ");
// 			instruction.push(operand1, operand2);
// 			IR = instruction;
// 			accumulator.push(LDA(IR));
// 			instruction = [];
// 		} else if (opcode == 5) {
// 			let operand1 = prompt("Enter operand 1: ");
// 			let operand2 = prompt("Enter operand 2: ");
// 			let operand3 = prompt("Enter operand 3: ");
// 			instruction.push(operand1, operand2, operand3);
// 			IR = instruction;
// 			accumulator.push(MULA(IR));
// 			instruction = [];
// 		} else if (opcode == 99) {
// 			console.log("Program terminated");
// 			break;
// 		} else {
// 			console.log("Invalid opcode");
// 		}
// 		opcode = prompt(
// 			"Enter opcode: ( 1 - ADDA, 2 - SUBA, 3 - STOA, 4 - LDA, 5 - MULA, 99 - exit )"
// 		);
// 	}
// 	console.log(InstructionCounter);
// 	console.log(ProgramCounter);
// 	console.log(IR);
// 	console.log(accumulator);
// };
// main();

// function Add() {
// 	accumulator += memory[memoryIndex];
// 	ProgramCounter++;
// }

// function Subtract() {
// 	accumulator -= memory[memoryIndex];
// 	ProgramCounter++;
// }

// function Store() {
// 	memory[memoryIndex] = accumulator;
// 	ProgramCounter++;
// }

// function Load() {
// 	accumulator = memory[memoryIndex];
// 	ProgramCounter++;
// }

// function Multiply() {
// 	accumulator *= memory[memoryIndex];
// 	ProgramCounter++;
// }

// function Exit() {
// 	console.log("Program has ended.");
// 	return;
// }

// function Execute() {
// 	switch (opcode) {
// 		case "1":
// 			Add();

// 			break;
// 		case "2":
// 			Subtract();
// 			break;
// 		case "3":
// 			Store();
// 			break;
// 		case "4":
// 			Load();
// 			break;
// 		case "5":
// 			Multiply();
// 			break;
// 		case "99":
// 			Exit();
// 			break;
// 		default:
// 			console.log("Invalid opcode.");
// 	}
// }
// while (opcode != "99") {
// 	opcode = prompt(
// 		"Enter opcode: ( 1 - ADDA, 2 - SUBA, 3 - STOA, 4 - LDA, 5 - MULA, 99 - exit )"
// 	);
// 	Execute();
// }

// while (opcode !== "99") {
// 	memorySize = prompt("Enter the size of the memory array: ");
// 	memory = new Array(memorySize);
// 	accumulator = prompt("Enter the accumulator: ");
// 	memoryIndex = prompt("Enter the memory index: ");
// 	opcode = prompt(
// 		"Enter opcode: ( 1 - ADDA, 2 - SUBA, 3 - STOA, 4 - LDA, 5 - MULA, 99 - exit )"
// 	);
// 	Execute();
// }
// console.table(memory);

// while (opcode != 99) {
// 	let first = prompt("Enter first number: ");
// 	let second = prompt("Enter second number: ");
// 	let result = 0;
// 	switch (opcode) {
// 		case "1":
// 			result = parseInt(first) + parseInt(second);
// 			break;
// 		case "2":
// 			result = parseInt(first) * parseInt(second);
// 			break;
// 		case "3":
// 			result = prompt("Enter result: ");
// 			break;
// 		case "4":
// 			result = prompt("Enter result: ");
// 			break;
// 		case "5":
// 			result = parseInt(first) * parseInt(second);
// 			break;
// 		default:
// 			console.log("Invalid opcode");
// 			break;
// 	}
// 	console.log("Result: " + result);
// 	opcode = prompt(
// 		"Enter opcode: ( 1 - add, 2 - Substitute, 3 - Store, 4 - Load, 5 - Multiplication, 99 - exit )"
// 	);
// }

// for (let i = 0; i < instruction.length; i++) {
// 	if (task == instruction[i]) {
// 		IR = i;
// 	}
// }

// while (task != "END") {
// 	IR.push(task);
// 	task = prompt("Enter the instruction: ");
// }

// while (instruction < IR.length) {
// 	if (IR[instruction] == "ADD") {
// 		let operand1 = prompt("Enter the operand1: ");
// 		let operand2 = prompt("Enter the operand2: ");
// 		AC = parseInt(operand1) + parseInt(operand2);
// 	} else if (IR[instruction] == "SUB") {
// 		let operand1 = prompt("Enter the operand1: ");
// 		let operand2 = prompt("Enter the operand2: ");
// 		AC = parseInt(operand1) - parseInt(operand2);
// 	} else if (IR[instruction] == "MUL") {
// 		let operand1 = prompt("Enter the operand1: ");
// 		let operand2 = prompt("Enter the operand2: ");
// 		AC = parseInt(operand1) * parseInt(operand2);
// 	} else if (IR[instruction] == "DIV") {
// 		let operand1 = prompt("Enter the operand1: ");
// 		let operand2 = prompt("Enter the operand2: ");
// 		AC = parseInt(operand1) / parseInt(operand2);
// 	} else if (IR[instruction] == "INV") {
// 		let operand1 = prompt("Enter the operand1: ");
// 		AC = parseInt(operand1) * -1;
// 	} else if (IR[instruction] == "JMP") {
// 		let operand1 = prompt("Enter the operand1: ");
// 		instruction = parseInt(operand1) - 1;
// 	} else if (IR[instruction] == "JMZ") {
// 		let operand1 = prompt("Enter the operand1: ");
// 		if (AC == 0) {
// 			instruction = parseInt(operand1) - 1;
// 		}
// 	} else if (IR[instruction] == "JMN") {
// 		let operand1 = prompt("Enter the operand1: ");
// 		if (AC < 0) {
// 			instruction = parseInt(operand1) - 1;
// 		}
// 	} else if (IR[instruction] == "DJN") {
// 		let operand1 = prompt("Enter the operand1: ");
// 		if (AC % 2 == 0) {
// 			instruction = parseInt(operand1) - 1;
// 		}
// 	}
// 	console.log("The program counter is: " + ProgramCounter);
// 	console.log("The accumulator is: " + AC);
// 	console.log(`The instruction register is: ${IR[instruction]}`);
// 	ProgramCounter++;
// 	instruction++;
// }
// console.log(`The final value of the accumulator is: ${AC}`);
// console.log(`The final value of the program counter is: ${ProgramCounter}`);
// console.log(
// 	`The final value of the instruction register is: ${IR[instruction]}`
// );

// 	while (opcode != 99) {
// 		if (opcode == 1) {
// 			memoryAddress = parseInt(operand);
// 			memoryValue = memory[memoryAddress];
// 			accumulator[0] = accumulator + memoryValue;
// 			console.log("Accumulator value: " + accumulator[0]);
// 			console.log("Program Counter: " + programCounter);
// 			console.log("Instruction Register: " + IR);
// 			programCounter = programCounter + 1;
// 			IR = [opcode, operand];
// 			console.log("Accumulator value: " + accumulator);
// 			console.log("Program Counter: " + programCounter);
// 			console.log("Instruction Register: " + IR);
// 			opcode = prompt(
// 				"Enter opcode: ( 1 - ADDA, 2 - SUBA, 3 - STOA, 4 - LDA, 5 - MULA, 99 - exit )"
// 			);
// 			operand = prompt("Enter operand: ");
// 		} else if (opcode == 2) {
// 			memoryAddress = parseInt(operand);
// 			memoryValue = memory[memoryAddress];
// 			accumulator = accumulator - memoryValue;
// 			console.log("Accumulator value: " + accumulator);
// 			console.log("Program Counter: " + programCounter);
// 			console.log("Instruction Register: " + IR);
// 			programCounter = programCounter + 1;
// 			IR = [opcode, operand];
// 			console.log("Accumulator value: " + accumulator);
// 			console.log("Program Counter: " + programCounter);
// 			console.log("Instruction Register: " + IR);
// 			opcode = prompt(
// 				"Enter opcode: ( 1 - ADDA, 2 - SUBA, 3 - STOA, 4 - LDA, 5 - MULA, 99 - exit )"
// 			);
// 			operand = prompt("Enter operand: ");
// 		} else if (opcode == 3) {
// 			memoryAddress = parseInt(operand);
// 			memory[memoryAddress] = accumulator;
// 			console.log("Accumulator value: " + accumulator);
// 			console.log("Program Counter: " + programCounter);
// 			console.log("Instruction Register: " + IR);
// 			programCounter = programCounter + 1;
// 			IR = [opcode, operand];
// 			console.log("Accumulator value: " + accumulator);
// 			console.log("Program Counter: " + programCounter);
// 			console.log("Instruction Register: " + IR);
// 			opcode = prompt(
// 				"Enter opcode: ( 1 - ADDA, 2 - SUBA, 3 - STOA, 4 - LDA, 5 - MULA, 99 - exit )"
// 			);
// 			operand = prompt("Enter operand: ");
// 		} else if (opcode == 4) {
// 			memoryAddress = parseInt(operand);
// 			accumulator = memory[memoryAddress];
// 			console.log("Accumulator value: " + accumulator);
// 			console.log("Program Counter: " + programCounter);
// 			console.log("Instruction Register: " + IR);
// 			programCounter = programCounter + 1;
// 			IR = [opcode, operand];
// 			console.log("Accumulator value: " + accumulator);
// 			console.log("Program Counter: " + programCounter);
// 			console.log("Instruction Register: " + IR);
// 			opcode = prompt(
// 				"Enter opcode: ( 1 - ADDA, 2 - SUBA, 3 - STOA, 4 - LDA, 5 - MULA, 99 - exit )"
// 			);
// 			operand = prompt("Enter operand: ");
// 		} else if (opcode == 5) {
// 			memoryAddress = parseInt(operand);
// 			memoryValue = memory[memoryAddress];
// 			accumulator = accumulator * memoryValue;
// 			console.log("Accumulator value: " + accumulator);
// 			console.log("Program Counter: " + programCounter);
// 			console.log("Instruction Register: " + IR);
// 			programCounter = programCounter + 1;
// 			IR = [opcode, operand];
// 			console.log("Accumulator value: " + accumulator);
// 			console.log("Program Counter: " + programCounter);
// 			console.log("Instruction Register: " + IR);
// 			opcode = prompt(
// 				"Enter opcode: ( 1 - ADDA, 2 - SUBA, 3 - STOA, 4 - LDA, 5 - MULA, 99 - exit )"
// 			);
// 			operand = prompt("Enter operand: ");
// 		} else {
// 			console.log("Invalid opcode");
// 			opcode = prompt(
// 				"Enter opcode: ( 1 - ADDA, 2 - SUBA, 3 - STOA, 4 - LDA, 5 - MULA, 99 - exit )"
// 			);
// 			operand = prompt("Enter operand: ");
// 		}
// 	}
// } else {
// 	console.log("Program terminated");
// }
