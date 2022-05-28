#include <iostream>
#include <cmath>
using namespace std;
int numberOfBlocks(int blockSize)
{
   return round(log2(blockSize));
}
int numberOfSets(int cacheSize, int blockSize)
{
   return round(log2(cacheSize / blockSize));
}
int numberOfTags(int memoryAddressSpace, int set, int blockSize)
{
   return memoryAddressSpace - set - numberOfBlocks(blockSize);
}
int main()
{
   cout << "Enter the memory address space: ";
   int memoryAddressSpace = 32;
   cin >> memoryAddressSpace;
   cout << "Enter the cacheSize size: ";
   int cacheSize = 256;
   cin >> cacheSize;
   cout << "Enter the block size: ";
   int blockSize = 128;
   cin >> blockSize;
   int block = numberOfBlocks(blockSize);
   int set = numberOfSets(cacheSize * 1024, blockSize);
   int tag = numberOfTags(memoryAddressSpace, set, blockSize);
   cout << "Direct Mapping :" << endl;
   cout << "Number of blocks: " << block << endl;
   cout << "Number of sets: " << set << endl;
   cout << "Number of tags: " << tag << endl;
   cout << "2-way Associative Mapping :" << endl;
   set = 0;
   tag = 0;
   set = numberOfSets(cacheSize * 1024, blockSize);
   tag = numberOfTags(memoryAddressSpace, set, blockSize);
   set = set - 1;
   tag = tag + 1;
   cout << "Number of blocks: " << numberOfBlocks(blockSize) << endl;
   cout << "Number of sets: " << set << endl;
   cout << "Number of tags: " << tag << endl;
   cout << "4-way Associative Mapping :" << endl;
   set = 0;
   tag = 0;
   set = numberOfSets(cacheSize * 1024, blockSize);
   tag = numberOfTags(memoryAddressSpace, set, blockSize);
   set = set - 2;
   tag = tag + 2;
   cout << "Number of blocks: " << numberOfBlocks(blockSize) << endl;
   cout << "Number of sets: " << set << endl;
   cout << "Number of tags: " << tag << endl;
   cout << "8-way Associative Mapping :" << endl;
   set = 0;
   tag = 0;
   set = numberOfSets(cacheSize * 1024, blockSize);
   tag = numberOfTags(memoryAddressSpace, set, blockSize);
   set = set - 3;
   tag = tag + 3;
   cout << "Number of blocks: " << numberOfBlocks(blockSize) << endl;
   cout << "Number of sets: " << set << endl;
   cout << "Number of tags: " << tag << endl;
   cout << "Fully Associative Mapping :" << endl;
   set = 0;
   tag = 0;
   set = numberOfSets(cacheSize * 1024, blockSize);
   tag = numberOfTags(memoryAddressSpace, set, blockSize);
   tag = tag + set;
   cout << "Number of blocks: " << numberOfBlocks(blockSize) << endl;
   cout << "Number of tags: " << tag << endl;
   return 0;
}
