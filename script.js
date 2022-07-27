const rev = (str) => str.split('').reverse().join('');
// console.log(rev('hello'));

const palindrome = (str) => {
	const aqq = str.split('').reverse().join('');
	return aqq === str;
};
// console.log(palindrome('abba'));

const revInt = (n) => {
	const aqq = n.toString().split('').reverse().join('');
	return parseInt(aqq) * Math.sign(n);
};
// console.log(revInt(-15));

const charMax = (str) => {
	const charMap = {};
	let max = 0;
	let charMax = '';
	for (let char of str.toLowerCase()) {
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
// console.log(charMax('hello'));

const chunkArray = (array, size) => {
	const chunked = [];
	for (let element of array) {
		const last = chunked[chunked.length - 1];
		if (!last || last.length === size) {
			chunked.push([element]);
		} else {
			last.push(element);
		}
	}
	return chunked;
};
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 4));

// const anagrams = (stringA, stringB) => {
// 	return cleanUp(stringA) === cleanUp(stringB);
// };
// const cleanUp = (str) => {
// 	return str.replace(/[\^w]/g, '').toLowerCase().split('').sort().join('');
// };
// console.log(anagrams('hello', 'hello'));

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
	for (let char of str.toLowerCase()) {
		charMap[char] = charMap[char] + 1 || 1;
	}
	return charMap;
};
// console.log(anagrams('hello', 'hell'));

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

// const capitalization = (str) => {
// 	const words = [];
// 	for (let word of str.split(' ')) {
// 		words.push(word[0].toUpperCase() + word.slice(1));
// 	}
// 	return words.join(' ');
// };
// console.log(capitalization('hi how are you?'));
// const steps = (n) => {
// 	for (let rows = 0; rows <= n; rows++) {
// 		let stairs = '';
// 		for (let columns = 0; columns <= n; columns++) {
// 			if (columns < rows) {
// 				stairs += '#';
// 			} else {
// 				stairs += ' ';
// 			}
// 		}
// 		console.log(stairs);
// 	}
// };
// steps(6);

// const pyramid = (n) => {
// 	const midpoint = Math.floor((2 * n - 1) / 2);
// 	for (let rows = 0; rows < n; rows++) {
// 		let levels = '';
// 		for (let columns = 0; columns < 2 * n - 1; columns++) {
// 			if (midpoint - rows <= columns && midpoint + rows >= columns) {
// 				levels += '#';
// 			} else {
// 				levels += ' ';
// 			}
// 		}
// 		console.log(levels);
// 	}
// };
// pyramid(6);

// const vowels = (str) => {
// 	const letters = ['a', 'e', 'i', 'o', 'u'];
// 	let counter = 0;
// 	for (let char of str.toLowerCase()) {
// 		if (letters.includes(char)) {
// 			counter++;
// 		}
// 	}
// 	return counter;
// };
// console.log(vowels('humna'));

// const vowels = (str) => {
// 	const matches = str.match(/[aeiou]/gi);
// 	return matches ? matches.length : 0;
// };
// console.log(vowels('humna'));

const matrix = (n) => {
	const result = [];
	for (let i = 0; i <= n; i++) {
		result.push([]);
	}
	let counter = 1;
	let startRow = 0;
	let endRow = n - 1;
	let startColumn = 0;
	let endColumn = n - 1;
	while (startRow <= endRow && startColumn <= endColumn) {
		// top row
		for (let i = startColumn; i <= endColumn; i++) {
			result[startRow][i] = counter;
			counter++;
		}
		startRow++;

		// right Column
		for (let i = startRow; i <= endRow; i++) {
			result[i][endColumn] = counter;
			counter++;
		}
		endColumn--;

		// bottom Row
		for (let i = endColumn; i >= startColumn; i--) {
			result[endRow][i] = counter;
			counter++;
		}
		endRow--;

		// left column
		for (let i = endRow; i >= startRow; i--) {
			result[i][startColumn] = counter;
			counter++;
		}
		startColumn++;
	}
	return result;
};
// console.log(matrix(6));

// const fib = (n) => {
// 	const array = [0, 1];
// 	for (let i = 2; i <= n; i++) {
// 		const a = array[i - 1];
// 		const b = array[i - 2];
// 		array.push(a + b);
// 	}
// 	return array[n];
// };
// console.log(fib(6));

// const memoize = (fib) => {
// 	const cache = {};
// 	return (...args) => {
// 		if (cache[args]) {
// 			return cache[args];
// 		}
// 		const result = fib.apply(this, args);
// 		return result;
// 	};
// };
// const slowfib = (n) => {
// 	if (n < 2) {
// 		return n;
// 	}
// 	return slowfib(n - 1) + slowfib(n - 2);
// };
// const fib = memoize(slowfib);
// console.log(fib(6));
