// const reverse = (str) => {
// 	const arr = str.split('').reverse().join('');
// 	return arr;
// };
// const reverse = (str) => str.split('').reverse().join('');
// console.log(reverse('apple'));

// console.log('hello');

// //////// palindrome ///////

// const palindrome = (str) => {
// 	const arr = str.split('').reverse().join('');
// 	if (arr === str) return true;
// 	else return false;
// };
// console.log(palindrome('apple'));
// console.log(palindrome('abba'));
// console.log(palindrome('a'));

// //////////// reverse int//////////
const pali = (str) => {
	const arr = str.split('').reverse().join('');
	if (str === arr) return true;
	else return false;
};
console.log(pali('humna'));
console.log(pali('abc'));
console.log(pali('12321'));
console.log(pali('abba'));
