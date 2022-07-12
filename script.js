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
// const revInt = (int) => {
// 	const stt = String(int);
// 	const abb = Number(stt.split('').reverse().join(''));
// 	return abb;
// };

const revInt = (int) => {
	const abb = int.toString().split('').reverse().join('');
	const zxx = parseInt(abb);
	if (int < 0) {
		return zxx * -1;
	} else {
		return zxx;
	}
};

console.log(revInt(15));
console.log(revInt(981));
console.log(revInt(500));
console.log(revInt(-15));
console.log(revInt(-90));
