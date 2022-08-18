// const fib = (n) => {
// 	const result = [0, 1];
// 	for (let i = 2; i <= n; i++) {
// 		const a = result[i - 1];
// 		const b = result[i - 2];

// 		result.push(a + b);
// 	}
// 	return result[result.length - 1];
// };
// console.log(fib(4));

const memoization = (fib) => {
	const cache = {};
	return (...args) => {
		if (cache[args]) return cache[args];

		const result = fib.apply(this, args);
		cache[args] = result;
		return result;
	};
};

const slowFib = (n) => {
	if (n < 2) return n;
	else return slowFib(n - 1) + slowFib(n - 2);
};
const fib = memoization(slowFib);
console.log(slowFib(4));
