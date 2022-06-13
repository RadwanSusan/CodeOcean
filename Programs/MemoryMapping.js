// jshint esversion:6
const prompt = require("prompt-sync")();
const memoryAddressSpace = prompt("Enter the memory address space: ");
const cacheSize = prompt("Enter the cache size: ");
const blockSize = prompt("Enter the block size: ");
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
console.log(`\n \n Memory Length: ${Arr.Tag + Arr.Set + Arr.Block} \n\n`);
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
