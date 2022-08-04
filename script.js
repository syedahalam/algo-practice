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
// console.log(charMax('hello11155555555'));

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
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// const anagram = (stringA, stringB) => {
// 	return cleanUp(stringA) === cleanUp(stringB);
// };
// const cleanUp = (str) => {
// 	return str.replace(/[\^w]/g, '').toLowerCase().split('').sort().join();
// };
// console.log(anagram('hello', 'hell'));

const anagram = (stringA, stringB) => {
	const aCharMap = buildCharMap(stringA);
	const bCharMap = buildCharMap(stringB);

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
const buildCharMap = (str) => {
	const charMap = {};
	for (let char of str.toLowerCase()) {
		charMap[char] = charMap[char] + 1 || 1;
	}
	return charMap;
};
// console.log(anagram('hello', 'hell'));

const fizzBuzz = (n) => {
	for (let i = 0; i <= n; i++) {
		if (i % 15 === 0) {
			console.log('fizzbuzz');
		} else if (i % 3 === 0) {
			console.log('fizz');
		} else if (i % 5 === 0) {
			console.log('buzz');
		} else {
			console.log(i);
		}
	}
};
// fizzBuzz(15);

// const capitalization = (str) => {
// 	const words = [];
// 	for (let word of str.split(' ')) {
// 		words.push(word[0].toUpperCase() + word.slice(1));
// 	}
// 	return words.join(' ');
// };
// console.log(capitalization('hi how are you'));

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

const pyramid = (n) => {
	const midpoint = Math.floor((2 * n - 1) / 2);
	for (let rows = 0; rows < n; rows++) {
		let levels = '';
		for (let columns = 0; columns < 2 * n - 1; columns++) {
			if (midpoint - rows < columns && midpoint + rows > columns) {
				levels += '#';
			} else {
				levels += ' ';
			}
		}
		console.log(levels);
	}
};
// pyramid(6);

// const vowels = (str) => {
// 	const matches = str.match(/[aeiou]/gi);
// 	return matches ? matches.length : 0;
// };

const vowels = (str) => {
	let array = ['a', 'e', 'i', 'o', 'u'];
	let counter = 0;
	for (let char of str.toLowerCase()) {
		if (array.includes(char)) {
			counter++;
		}
	}
	return counter;
};

// console.log(vowels('humnaeiu'));

const matrix = (n) => {
	const results = [];
	for (let i = 0; i < n; i++) {
		results.push([]);
	}
	let counter = 1;
	let startRow = 0;
	let endRow = n - 1;
	let startColumn = 0;
	let endColumn = n - 1;

	while (startRow <= endRow && startColumn <= endColumn) {
		// top row

		for (let i = startColumn; i <= endColumn; i++) {
			results[startRow][i] = counter;
			counter++;
		}
		startRow++;

		// left column
		for (let i = startRow; i <= endRow; i++) {
			results[i][endColumn] = counter;
			counter++;
		}
		endColumn--;

		// bottom row

		for (let i = endColumn; i >= startColumn; i--) {
			results[endRow][i] = counter;
			counter++;
		}
		endRow--;

		// right column

		for (let i = endRow; i >= startRow; i--) {
			results[i][startColumn] = counter;
			counter++;
		}
		startColumn++;
	}
	return results;
};
// console.log(matrix(6));

// const fib = (n) => {
// 	const arr = [0, 1];
// 	for (let i = 2; i <= n; i++) {
// 		const a = arr[i - 1];
// 		const b = arr[i - 2];

// 		arr.push(a + b);
// 	}
// 	return arr[n];
// };

const memoization = (fib) => {
	const cache = {};
	return (...args) => {
		if (cache[args]) {
			return cache[args];
		}
		const record = fib.apply(this, args);
		cache[args] = record;
		return record;
	};
};
const slowfib = (n) => {
	if (n < 2) return n;
	else return slowfib(n - 1) + slowfib(n - 2);
};
const fib = memoization(slowfib);
// console.log(fib(6));

class Stack {
	constructor() {
		this.data = [];
	}
	add(record) {
		this.data.push(record);
	}
	remove() {
		return this.data.pop();
	}
	peek() {
		return this.data[this.data.length - 1];
	}
}
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
			this.first.push(this.second.pop);
		}
		return record;
	}
	peek() {
		while (this.first.peek()) {
			this.second.push(this.first.pop());
		}
		const record = this.second.peek();
		while (this.second.peek()) {
			this.first.push(this.second.pop);
		}
		return record;
	}
}

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}
class LinkedList {
	constructor() {
		this.head = null;
	}
	insertFirst(record) {
		const node = new Node(record);
	}
	size() {
		let counter = 0;
		let node = this.head;
		while (node) {
			counter++;
			node = node.next;
		}
		return counter;
	}
	getFirst() {
		return this.head;
	}
	getLast() {
		if (!this.head) {
			return null;
		}
		let node = this.head;
		while (node) {
			if (!node.next) {
				return node;
			}
			node = node.next;
		}
	}
	clear() {
		this.head = null;
	}
	removeFirst() {
		if (!this.head) {
			return;
		}
		this.head = this.head.next;
	}
	removeLast() {
		if (!this.head) {
			return null;
		}
		if (!this.head.next) {
			this.head = null;
			return;
		}
		const previous = this.head;
		const node = this.head.next;
		while (node.next) {
			previous = node;
			node = node.next;
		}
		previous.next = null;
	}
	insertLast(data) {
		let last = this.getLast();
		if (last) {
			last.next = new Node(data);
		} else {
			this.head = new Node(data);
		}
	}
	getAt(index) {
		let counter = 0;
		let node = this.head;
		while (node) {
			if (counter === index) {
				return node;
			}
			counter++;
			node = node.next;
		}
		return null;
	}
	removeAt(index) {
		if (!this.head) {
			this.head = null;
			return;
		}
		if (!this.head.next) {
			this.head = this.head.next;
			return;
		}
		let previous = this.getAt(index - 1);
		if (!previous || !previous.next) {
			return;
		}
		previous.next = previous.next.next;
	}
	insertAt(data, index) {
		if (this.head) {
			this.head = new Node(data);
			return;
		}
		if (index === 0) {
			this.head = new Node(data, this.head);
			return;
		}
		let previous = this.getAt(index - 1) || this.getLast();
		let node = new Node(data, previous.next);
		previous.next = previous.next.next;
	}
}
