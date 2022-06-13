// jshint esversion:6
const theRADMethod = (doc, query) => {
	doc = doc.toLowerCase();
	query = query.toLowerCase();
	const array1 = [];
	const array2 = [];
	const str1 = doc.split(" ");
	const str2 = query.split(" ");
	const str3 = doc.concat(" ", query).split(" ");
	const str4 = str3.filter(
		(item, index, array) => array.indexOf(item) === index,
	);
	for (const element of str4) {
		let count = 0;
		for (const element2 of str1) {
			if (element === element2) {
				count++;
			}
		}
		array1.push(count);
	}
	for (const element of str4) {
		let count = 0;
		for (const element2 of str2) {
			if (element === element2) {
				count++;
			}
		}
		array2.push(count);
	}
	const cosinesim = (A, B) => {
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
		return dotproduct / (mA * mB);
	};
	return cosinesim(array1, array2);
};
const Technology = "Technology is a new way of thinking about the world";
const Sport = "Sport is very important to the world";
const Fashion = "Fashion is a new way of thinking about the world";
const query = "World";
const decide = (Technology, Sport, Fashion, query) => {
	const p1 = theRADMethod(Technology, query);
	const p2 = theRADMethod(Sport, query);
	const p3 = theRADMethod(Fashion, query);
	const max = Math.max(p1, p2, p3);
	console.log(`Technology (${p1})`);
	console.log(`Sport (${p2})`);
	console.log(`Fashion (${p3})`);
	switch (max) {
		case p1:
			return `the document is Technology`;
		case p2:
			return `the document is Sport`;
		case p3:
			return `the document is Fashion`;
	}
};
console.log(decide(Technology, Sport, Fashion, query));
