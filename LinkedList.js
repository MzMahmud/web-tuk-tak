class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size == 0;
    }

    pushFront(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        if (!this.tail) {
            this.tail = this.head;
        }
    }

    pushBack(val) {
        if (this.tail) {
            this.tail.next = new Node(val);
        } else {
            this.head = this.tail = new Node(val);
        }
        this.size++;
    }

    popFront() {
        let popped = this.head.val;
        this.head = this.head.next;
        this.size--;
        return popped;
    }

    peekHead() {
        return this.head.val;
    }

    peekTail() {
        return this.tail.val;
    }

    print() {
        let head = this.head;
        let str = [];
        while (head) {
            str.push(`${head.val}`)
            head = head.next;
        }
        console.log(str.join('->'));
    }
}