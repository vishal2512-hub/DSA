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
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let last = this.head;
        while (last.next) {
            last = last.next;
        }
        last.next = newNode;
    }

    getLength() {
        let last = this.head;
        let count = 0;
        while(last !== null) {
            count++;
            last = last.next;
        }
        return count;
    }
    printList() {
        let last = this.head;
        while (last) {
            process.stdout.write(last.data + " → ");
            last = last.next;
        }
        console.log("null");
    }
}

let list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.printList(); // 1 → 2 → 3 → 4 → null
console.log("Length of LinkedList:", list.getLength()); // Output: 4
