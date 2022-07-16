// reverse

const rev = (str) => str.split('').reverse().join('');
// console.log(rev('hello'));

// palindrome

const palindrome = (str) => {
	const aqq = str.split('').reverse().join('');
	return str === aqq;
};
// console.log(palindrome('abba'));
// console.log(palindrome('humna'));

// reverse int

const revInt = (n) => {
	const aqq = n.toString().split('').reverse().join('');
	return parseInt(aqq) * Math.sign(n);
};
// console.log(revInt(15));
// console.log(revInt(-15));

// maximum characters

const maxChar = (str) => {
	const charMap = {};
	let max = 0;
	let maxChar = '';
	for (let char of str) {
		charMap[char] = charMap[char] + 1 || 1;
	}
	for (let char in charMap) {
		if (charMap[char] > max) {
			max = charMap[char];
			maxChar = char;
		}
	}
	return maxChar;
};
// console.log(maxChar('hello'));
// console.log(maxChar('12222233445'));

// chunk array

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
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));

// anagrams

const anagrams = (stringA, stringB) => {
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
// console.log(anagrams('hello', 'hello'));

const anagram = (stringA, stringB) => {
	return cleanUp(stringA) === cleanUp(stringB);
};
const cleanUp = (str) => {
	return str.replace(/[\^w]/g, '').toLowerCase().split('').sort().join('');
};
// console.log(anagram('hello', 'hello'));

// fizzbuzz

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

// capitalization

const capitalization = (str) => {
	const words = [];
	for (let word of str.split(' ')) {
		words.push(word[0].toUpperCase() + word.slice(1));
	}
	return words.join(' ');
};
// console.log(capitalization('hi humna how are you?'));

// steps

// const steps = (n) => {
// 	for (let rows = 0; rows < n; rows++) {
// 		let stairs = '';
// 		for (let columns = 0; columns < n; columns++) {
// 			if (columns <= rows) {
// 				stairs += '#';
// 			} else {
// 				stairs += ' ';
// 			}
// 		}
// 		console.log(stairs);
// 	}
// };
// steps(5);

// pyramid

const pyramid = (n) => {
	const midpoint = Math.floor((2 * n - 1) / 2);

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
// pyramid(6);
