const memoize = (fib) => {
	const cache = {};
	return (...args) => {
		if (cache[args]) {
			return cache[args];
		}
		const result = fib.apply(this, args);
		cache[args] = result;
		return result;
	};
};

const slowFib = (n) => {
	if (n < 2) {
		return n;
	} else {
		return fib(n - 1) + fib(n - 2);
	}
};
const fib = memoize(slowFib);
console.log(fib(4));
