class Node {
	constructor(data, next = null) {
		this.head = data;
		this.next = next;
	}
}
class LinkedList {
	constructor() {
		this.head = null;
	}
	insertFirst(data) {
		const node = new Node(data);
	}
	size() {
		let counter = 0;
		let node = this.head;
		while (node) {
			counter++;
			node = node.next;
		}
		return counter;
	}
	getFirst() {
		return this.head;
	}
	getLast() {
		if (!this.head) {
			return false;
		}
		let node = this.head;
		while (node) {
			if (!node.next) {
				return node;
			}
			node = node.next;
		}
	}
	clear() {
		this.head = null;
	}
	removeFirst() {
		if (!this.head) {
			return;
		}
		this.head = this.head.next;
	}
	removeLast() {
		if (!this.head) {
			return null;
		}
		if (!this.head.next) {
			this.head = null;
			return;
		}
		const prev = this.head;
		const node = this.head.next;
		while (node) {
			prev = node;
			node = node.next;
		}
		prev.next = null;
	}
	insertLast(data) {
		const last = this.getLast();
		if (last) {
			last.next = new Node(data);
		} else {
			this.head = new Node(data);
		}
	}
	getAt(index) {
		let counter = 0;
		let node = this.head;
		while (node) {
			if (counter === index) {
				return node;
			}
			counter++;
			node = node.next;
		}
		return null;
	}
	removeAt(index) {
		if (!this.head) {
			return null;
		}
		if (index === 0) {
			this.head = this.head.next;
			return;
		}
		const previous = this.getAt(index) - 1;
		if (!previous || !previous.next) {
			return;
		}
		previous.next = previous.next.next;
	}
	insertAt(data, index) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}
		if (index === 0) {
			this.head = new Node(data, this.head);
			return;
		}
		const previous = this.getAt(index - 1);
		const node = new Node(data, previous.next);
		previous.next = node;
	}
}
const midpoint = (LinkedList) => {
	let slow = LinkedList.getFirst();
	let fast = LinkedList.getFirst();

	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
};

const circularList = (LinkedList) => {
	const slow = LinkedList.getFirst();
	const fast = LinkedList.getFirst();

	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;

		if (slow === fast) {
			return true;
		}
	}
	return null;
};

const stepFromTail = (LinkedList, n) => {
	const slow = LinkedList.getFirst();
	const fast = LinkedList.getFirst();

	while (n > 0) {
		fast = fast.next;
		n--;
	}
	while (fast.next) {
		slow = slow.next;
		fast = fast.next;
	}
	return slow;
};
