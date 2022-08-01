class Queue {
	constructor() {
		this.data = [];
	}
	add(record) {
		this.data.unshift(record);
	}
	remove() {
		return this.data.pop();
	}
}
class Queue {
	constructor() {
		this.data = [];
	}
	add(record) {
		this.data.unshift(record);
	}
	remove() {
		return this.data.pop();
	}
	peek() {
		return this.data[this.data.length - 1];
	}
}

const weave = (sourceOne, sourceTwo) => {
	const q = new Queue();
	while (sourceOne.peek() || sourceTwo.peek()) {
		if (sourceOne.peek()) {
			q.add(sourceOne.remove());
		}
		if (sourceTwo.peek()) {
			q.add(sourceTwo.remove());
		}
	}
	return q;
};
class Stack {
	constructor() {
		this.data = [];
	}
	add(record) {
		this.data.push(record);
	}
	remove() {
		return this.data.pop();
	}
	peek() {
		return this.data[this.data.length - 1];
	}
}

class Queue {
	constructor() {
		this.first = new Stack();
		this.second = new Stack();
	}
	add(record) {
		this.first.push(record);
	}
	remove() {
		while (this.first.peek()) {
			this.second.push(this.first.pop());
		}
		const record = this.second.pop;

		while (this.second.peek()) {
			this.first.push(this.second.pop);
		}
		return record;
	}
	peek() {
		while (this.first.peek()) {
			this.second.push(this.first.pop());
		}
		const record = this.second.peek();
		while (this.second.peek()) {
			this.first.push(this.second.pop());
		}
		return record;
	}
}
