class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}
class LinkedList {
	constructor() {
		this.head = null;
	}
	insertFirst(data) {
		this.head = new Node(data, this.head);
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
		let node = this.head;
		while (node) {
			if (!node) {
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
	removeLast() {}
}
