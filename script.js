const rev = (str) => str.split('').reverse().join('');
// console.log(rev('hello'));

const palindrome = (str) => {
	const aqq = str.split('').reverse().join('');
	return str === aqq;
};
// console.log(palindrome('hello'));
// console.log(palindrome('abba'));

const revInt = (n) => {
	const aqq = n.toString().split('').reverse().join('');
	return parseInt(aqq) * Math.sign(n);
};
// console.log(revInt(15));
// console.log(revInt(-15));

const charMax = (str) => {
	const charMap = {};
	let max = 0;
	let charMax;
	for (let char of str) {
		charMap[char] = charMap[char] + 1 || 1;
	}
	for (let char in charMap) {
		if (charMap[char] > max) {
			max = charMap[char];
			charMax = char;
		}
	}
	return charMax;
};
// console.log(charMax('hellloooo'));

const chunkArray = (array, size) => {
	const chunked = [];
	for (let element of array) {
		let last = chunked[chunked.length - 1];
		if (!last || last.length === size) {
			chunked.push([element]);
		} else {
			last.push(element);
		}
	}
	return chunked;
};
// console.log(chunkArray([1, 2, 3, 4, 5], 3));

const anagram = (stringA, stringB) => {
	const aCharMap = buildMap(stringA);
	const bCharMap = buildMap(stringB);

	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
		return false;
	}
	for (let char in aCharMap) {
		if (aCharMap[char] !== bCharMap[char]) {
			return false;
		}
	}
	return true;
};
const buildMap = (str) => {
	const charMap = {};
	for (let char of str) {
		charMap[char] = charMap[char] + 1 || 1;
	}
	return charMap;
};
// console.log(anagram('hello', 'hell'));

const anagram1 = (stringA, stringB) => {
	return cleanUp(stringA) === cleanUp(stringB);
};
const cleanUp = (str) => str.replace(/[\^w]/g, '').split('').sort().join('');
// console.log(anagram1('hello', 'hello'));

// const fizzBuzz = (n) => {
// 	for (let i = 1; i <= n; i++) {
// 		if (i % 15 === 0) {
// 			console.log('fizzbuzz');
// 		} else if (i % 3 === 0) {
// 			console.log('fizz');
// 		} else if (i % 5 === 0) {
// 			console.log('buzz');
// 		} else {
// 			console.log(i);
// 		}
// 	}
// };
// fizzBuzz(15);

const capitalization = (str) => {
	let words = [];
	for (let word of str.split(' ')) {
		words.push(word[0].toUpperCase() + word.slice(1));
	}
	return words.join(' ');
};
// console.log(capitalization('hi there'));

const steps = (n) => {
	for (let rows = 0; rows < n; rows++) {
		let stairs = '';
		for (let columns = 0; columns < n; columns++) {
			if (columns <= rows) {
				stairs += '#';
			} else {
				stairs += ' ';
			}
		}
		console.log(stairs);
	}
};
steps(6);

const pyramid = (n) => {
	let midpoint = Math.floor((2 * n - 1) / 2);
	for (let rows = 0; rows < n; rows++) {
		let levels = '';
		for (let columns = 0; columns < 2 * n - 1; columns++) {
			if (midpoint - rows <= columns && midpoint + rows >= columns) {
				levels += '#';
			} else {
				levels += ' ';
			}
		}
		console.log(levels);
	}
};
pyramid(6);
