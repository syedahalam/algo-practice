// const reverse = (str) => {
// 	const arr = str.split('').reverse().join('');
// 	return arr;
// };
// const reverse = (str) => str.split('').reverse().join('');
// console.log(reverse('apple'));

// console.log('hello');

// //////// palindrome ///////

const palindrome = (str) => {
	const arr = str.split('').reverse().join('');
	if (arr === str) return true;
	else return false;
};
console.log(palindrome('apple'));
console.log(palindrome('abba'));
console.log(palindrome('a'));
