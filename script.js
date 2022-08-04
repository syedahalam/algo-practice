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

const chunkArray = (array, size) => {};
