class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}
	add(data) {
		this.children.push(new Node(data));
	}
	remove(data) {
		this.children = this.children.filter((node) => {
			return node.data !== data;
		});
	}
}
class Tree {
	constructor() {
		this.root = null;
	}
	transverseBF(fn) {
		const arr = [this.root];
		while (arr.length) {
			const node = arr.shift();
			arr.push(...node.children);
			fn(node);
		}
	}
	transverseDF(fn) {
		const arr = [this.root];
		while (arr.length) {
			const node = arr.shift();
			arr.unshift(...node.children);
			fn(node);
		}
	}
}
const levelWidth = (root) => {
	const arr = [root, 'check'];
	const counter = [0];

	while (arr.length) {
		const node = arr.shift();

		if (node === 'check') {
			counter.push(0);
			arr.push('check');
		} else {
			arr.push(...node.children);
			counter[counter.length - 1]++;
		}
	}
	return counter;
};
