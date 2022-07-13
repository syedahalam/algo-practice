// const chunk = (array, size) => {
// 	const chunked = [];
// 	for (let element of array) {
// 		const last = chunked[chunked.length - 1];
// 		if (!last || last.length === size) {
// 			chunked.push([element]);
// 		} else {
// 			last.push(element);
// 		}
// 	}
// 	return chunked;
// };

// const chunk = (array, size) => {
// 	const chunked = [];
// 	let index = 0;
// 	while (index < array.length) {
// 		chunked.push(array.slice(index, index + slice));
// 		index += size;
// 	}
// 	return chunked;
// };

// console.log(chunk([1, 2, 3, 4, 5], 2));
// console.log(chunk([1, 2, 3, 4, 5], 3));
// console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2));

function fizzBuzz(n) {
	for (let i = 1; i <= n; i++) {
		if (i % 15 === 0) console.log('fizzbuzz');
		else if (i % 3 === 0) console.log('fizz');
		else if (i % 5 === 0) console.log('buzz');
		else console.log(i);
	}
}
fizzBuzz(15);
