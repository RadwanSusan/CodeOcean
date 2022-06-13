// jshint esversion:6
let theRADMethod = (doc, query) => {
	doc = doc.toLowerCase();
	query = query.toLowerCase();
	let array1 = [];
	let array2 = [];
	let str1 = doc.split(" ");
	let str2 = query.split(" ");
	let str3 = doc.concat(" ", query).split(" ");
	let str4 = str3.filter((item, index, array) => array.indexOf(item) === index);
	for (let i = 0; i < str4.length; i++) {
		let count = 0;
		for (let j = 0; j < str1.length; j++) {
			if (str4[i] === str1[j]) {
				count++;
			}
		}
		array1.push(count);
	}
	for (let i = 0; i < str4.length; i++) {
		let count = 0;
		for (let j = 0; j < str2.length; j++) {
			if (str4[i] === str2[j]) {
				count++;
			}
		}
		array2.push(count);
	}
	let cosinesim = (A, B) => {
		let dotproduct = 0;
		let mA = 0;
		let mB = 0;
		for (i = 0; i < A.length; i++) {
			dotproduct += A[i] * B[i];
			mA += A[i] * A[i];
			mB += B[i] * B[i];
		}
		mA = Math.sqrt(mA);
		mB = Math.sqrt(mB);
		let similarity = dotproduct / (mA * mB);
		return similarity;
	};
	let p = cosinesim(array1, array2);
	return p;
};
let Technology = "Technology is a new way of thinking about the world";
let Sport = "Sport is very important to the world";
let Fashion = "Fashion is a new way of thinking about the world";
let query = "World";

let decide = (Technology, Sport, Fashion, query) => {
	let p1 = theRADMethod(Technology, query);
	let p2 = theRADMethod(Sport, query);
	let p3 = theRADMethod(Fashion, query);
	let max = Math.max(p1, p2, p3);
	console.log(`Technology (${p1})`);
	console.log(`Sport (${p2})`);
	console.log(`Fashion (${p3})`);

	if (max === p1) {
		return `the document is Technology`;
	} else if (max === p2) {
		return `the document is Sport`;
	} else if (max === p3) {
		return `the document is Fashion`;
	}
};
console.log(decide(Technology, Sport, Fashion, query));
