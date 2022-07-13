// const anagram = (stringA, stringB) => {
// 	const aCharMap = cleanUp(stringA);
// 	const bCharMap = cleanUp(stringB);

// 	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
// 		return false;
// 	}
// 	for (let char in aCharMap) {
// 		if (aCharMap[char] !== bCharMap[char]) {
// 			return false;
// 		}
// 	}
// 	return true;
// };
// const cleanUp = (str) => {
// // 	const charMap = {};
// // 	for (let char of str) {
// // 		charMap[char] = charMap[char] + 1 || 1;
// // 	}
// // 	return charMap;
// // };

// const anagram = (stringA, stringB) => {
// 	return cleanUp(stringA) === cleanUp(stringB);
// };
// const cleanUp = (str) => {
// 	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// };

// console.log(anagram('hello', 'hell'));
