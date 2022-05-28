// jshint esversion:6
const prompt = require("prompt-sync")();
let memoryAddressSpace = prompt(
	"Enter the memory address type: (1:bits, 2:bytes, 3:kilobytes, 4:megabytes, 5:gigabytes): ",
);
switch (memoryAddressSpace) {
	case "1":
		memoryAddressSpace = prompt("Enter the memory address space: ");
		break;
	case "2":
		memoryAddressSpace = prompt("Enter the memory address space: ");
		memoryAddressSpace *= 8;
		break;
	case "3":
		memoryAddressSpace = prompt("Enter the memory address space: ");
		memoryAddressSpace = memoryAddressSpace * 8 * 1024;
		break;
	case "4":
		memoryAddressSpace = prompt("Enter the memory address space: ");
		memoryAddressSpace = memoryAddressSpace * 8 * 1024 * 1024;
		break;
	case "5":
		memoryAddressSpace = prompt("Enter the memory address space: ");
		memoryAddressSpace = memoryAddressSpace * 8 * 1024 * 1024 * 1024;
		break;
	default:
		console.log("Invalid input");
}
const cacheSize = prompt("Enter the cache size: ");
const blockSize = prompt("Enter the block size: ");
// memoryAddressSpace = Math.round(Math.log2(memoryAddressSpace));
const numberOfBlocks = (blockSize) => {
	return Math.round(Math.log2(blockSize));
};
const numberOfSets = (cacheSize, blockSize) => {
	return Math.round(Math.log2(cacheSize / blockSize));
};
const numberOfTags = (memoryAddressSpace, set, blockSize) => {
	return memoryAddressSpace - set - blockSize;
};
console.log(`\n Direct Mapping Method: \n`);
let Arr = [];
Arr.Block = numberOfBlocks(blockSize);
Arr.Set = numberOfSets(cacheSize * 1024, blockSize);
Arr.Tag = numberOfTags(memoryAddressSpace, Arr.Set, Arr.Block);
console.table(Arr);
console.log(`\n 2-way associative Mapping Method: \n`);
Arr = [];
Arr.Block = numberOfBlocks(blockSize);
Arr.Set = numberOfSets(cacheSize * 1024, blockSize);
Arr.Tag = numberOfTags(memoryAddressSpace, Arr.Set, Arr.Block);
Arr.Set -= 1;
Arr.Tag += 1;
console.table(Arr);
console.log(`\n 4-way associative Mapping Method: \n`);
Arr = [];
Arr.Block = numberOfBlocks(blockSize);
Arr.Set = numberOfSets(cacheSize * 1024, blockSize);
Arr.Tag = numberOfTags(memoryAddressSpace, Arr.Set, Arr.Block);
Arr.Set -= 2;
Arr.Tag += 2;
console.table(Arr);
console.log(`\n 8-way associative Mapping Method: \n`);
Arr = [];
Arr.Block = numberOfBlocks(blockSize);
Arr.Set = numberOfSets(cacheSize * 1024, blockSize);
Arr.Tag = numberOfTags(memoryAddressSpace, Arr.Set, Arr.Block);
Arr.Set -= 3;
Arr.Tag += 3;
console.table(Arr);
console.log(`\n Fully associative Mapping Method: \n`);
Arr = [];
Arr.Block = numberOfBlocks(blockSize);
Arr.Tag = numberOfTags(
	memoryAddressSpace,
	numberOfSets(cacheSize * 1024, blockSize),
	Arr.Block,
);
const temp = numberOfSets(cacheSize * 1024, blockSize);
Arr.Tag += temp;
console.table(Arr);
