class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
            return;
        } 
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    findMiddle() {
        let slow = this.head;
        let fast = this.head;

        while(fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}

// Example 1
let ll1 = new LinkedList();
[1, 2, 3, 4, 5].forEach(num => ll1.insert(num));
console.log(ll1.findMiddle()); // Output: 3