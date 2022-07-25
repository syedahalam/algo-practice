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
// console.log(charMax('he1112222555555555llo'));

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
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

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
// console.log(anagrams('hello', 'hello'));

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
// console.log(capitalization('hello humna how are you?'));

// const steps = (n) => {
// 	for (let rows = 0; rows <= n; rows++) {
// 		let stairs = '';
// 		for (let columns = 0; columns <= n; columns++) {
// 			if (columns <= rows) {
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
// 	const matches = str.match(/[aeiou]/gi);
// 	return matches ? matches.length : 0;
// };
// console.log(vowels('humna'));

const vowels = (str) => {
	let counter = 0;
	const letters = ['a', 'e', 'i', 'o', 'u'];
	for (let char of str.toLowerCase()) {
		if (letters.includes(char)) {
			counter++;
		}
	}
	return counter;
};
// console.log(vowels('humna'));

const matrix = (n) => {
	let results = [];
	for (let i = 0; i < n; i++) {
		results.push([]);
	}
	let count = 1;
	let startRow = 0;
	let endRow = n - 1;
	let startColumn = 0;
	let endColumn = n - 1;
	while (startRow <= endRow && startColumn <= endColumn) {
		// top row
		for (let i = startColumn; i <= endColumn; i++) {
			results[startRow][i] = count;
			count++;
		}
		startRow++;

		// right Column
		for (let i = startRow; i <= endRow; i++) {
			results[i][endColumn] = count;
			count++;
		}
		endColumn--;

		// bottom row
		for (let i = endColumn; i >= startColumn; i--) {
			results[endRow][i] = count;
			count++;
		}
		endRow--;

		// left column

		for (let i = endRow; i >= startRow; i--) {
			results[i][startColumn] = count;
			count++;
		}
		startColumn++;
	}
	return results;
};
// console.log(matrix(6));

// const fib = (n) => {
// 	const result = [0, 1];
// 	for (let i = 2; i <= n; i++) {
// 		const a = result[i - 1];
// 		const b = result[i - 2];
// 		result.push(a + b);
// 	}
// 	return result[n];
// };
// console.log(fib(4));

const memoize = (fib) => {
	const cache = {};
	return (...args) => {
		if (cache[args]) {
			return cache[args];
		}
		const result = fib.apply(this, args);
		return result;
	};
};

const slowfib = (n) => {
	if (n < 2) return n;
	else return slowfib(n - 1) + slowfib(n - 2);
};
const fib = memoize(slowfib);
// console.log(fib(4));

// class Queue {
// 	constructor() {
// 		this.data = [];
// 	}
// 	add(record) {
// 		this.unshift(record);
// 	}
// 	remove() {
// 		return this.data.pop();
// 	}
// }

// class Queue {
// 	constructor() {
// 		this.data = [];
// 	}
// 	add(record) {
// 		this.unshift(record);
// 	}
// 	remove() {
// 		return this.data.pop();
// 	}
// 	peek() {
// 		return this.data[this.data.length - 1];
// 	}
// }

// class Stack {
// 	constructor() {
// 		this.data = [];
// 	}
// 	add(record) {
// 		this.push(record);
// 	}
// 	pop() {
// 		return this.data.pop();
// 	}
// 	peek() {
// 		return this.data[this.data.length - 1];
// 	}
// }

class Queue {
	constructor() {
		this.first = new Stack();
		this.second = new Stack();
	}
	add(record) {
		this.first.push(record);
	}
	remove() {
		while (this.first.peek()) {
			this.second.push(this.first.pop());
		}
		const record = this.second.pop();

		while (this.second.peek()) {
			this.first.push(this.second.pop());
		}
		return record;
	}
	peek() {
		while (this.first.peek()) {
			this.second.push(this.first.pop());
		}
		const record = this.second.peek();

		while (this.second.peek()) {
			this.first.push(this.second.pop());
		}
		return record;
	}
}
