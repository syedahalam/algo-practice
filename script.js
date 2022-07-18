const vowels = (str) => {
	const letters = ['a', 'e', 'i', 'o', 'u'];
	let counter = 0;

	for (let char of str) {
		if (letters.includes(char)) {
			counter++;
			console.log(char);
		}
	}
	return counter;
};
console.log(vowels('humna'));

const vowels1 = (str) => {
	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
};
console.log(vowels1('humna'));
