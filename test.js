// function to find the Bitwise AND between the first and last hexadecimal numbers
// of a string
let hexCompliment = (str) => {
	// function to get the compliment of a hexadecimal number
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
			case "a":
				complement += "5";
				break;
			case "b":
				complement += "4";
				break;
			case "c":
				complement += "3";
				break;
			case "d":
				complement += "2";
				break;
			case "e":
				complement += "1";
				break;
			case "f":
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
let a = "01a2";
let b = "0235";
let c = BitwiseXNOR(a, b);
console.log(c);

// 023a => 0000 0001 1010 0010
// 0af5 => 0000 1010 1111 0101
// xnor => 1111 0100 1010 1000
