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

    // Insert at the end
    insert(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = newNode;
    }

    // Reverse the linked list
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next;  // Store next node
            current.next = prev;  // Reverse current node's pointer
            prev = current;       // Move prev to current node
            current = next;       // Move to next node
        }

        this.head = prev;  // Update head to new first node
    }

    // Get the new head value
    getHeadValue() {
        return this.head ? this.head.data : null;
    }

    // Print the linked list
    printList() {
        let temp = this.head;
        let result = [];
        while (temp !== null) {
            result.push(temp.data);
            temp = temp.next;
        }
        console.log(result.join(" -> "));
    }
}

// Example Usage
let ll = new LinkedList();
ll.insert(1);
ll.insert(3);
ll.insert(2);
ll.insert(4);

console.log("Original Linked List:");
ll.printList();

ll.reverse();
console.log("Reversed Linked List:");
ll.printList();

console.log("New Head Value:", ll.getHeadValue());  // Output: 4
