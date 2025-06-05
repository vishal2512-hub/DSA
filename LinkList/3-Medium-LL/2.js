class Box {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Chain {
    constructor() {
        this.head = null;
    }

    add(value) {
        let newBox = new Box(value);
        if (!this.head) {
            this.head = newBox;
            return;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = newBox;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next;  // Store next node
            current.next = prev;  // Reverse link
            prev = current;       // Move prev forward
            current = next;       // Move current forward
        }
        this.head = prev;  // New head of the reversed list
    }

    getHead() {
        return this.head ? this.head.value : null;
    }

    printList() {
        let temp = this.head;
        let result = [];
        while (temp) {
            result.push(temp.value);
            temp = temp.next;
        }
        console.log(result.join(" -> "));
    }
}

// Example 1
let list1 = new Chain();
[1, 3, 2, 4].forEach(num => list1.add(num));
console.log("Original List:");
list1.printList();
list1.reverse();
console.log("Reversed List:");
list1.printList();
console.log("New Head:", list1.getHead()); // Output: 4

// Example 2
let list2 = new Chain();
list2.add(4);
console.log("Original List:");
list2.printList();
list2.reverse();
console.log("Reversed List:");
list2.printList();
console.log("New Head:", list2.getHead()); // Output: 4
