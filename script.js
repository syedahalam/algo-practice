const pyramid = (n) => {
	const mid = Math.floor((2 * n - 1) / 2);

	for (let rows = 0; rows < n; rows++) {
		let levels = '';

		for (let columns = 0; columns < 2 * n - 1; columns++) {
			if (mid - rows <= columns && mid + rows >= columns) {
				levels += '#';
			} else {
				levels += ' ';
			}
		}
		console.log(levels);
	}
};
pyramid(5);
