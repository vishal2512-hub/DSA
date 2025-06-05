class Box {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedBoxes {
    constructor() {
        this.firstBox = null;  // Points to the first box
        this.lastBox = null;   // Points to the last box
    }

    // Insert a new box at the end
    insert(data) {
        let newBox = new Box(data);
        if (!this.firstBox) {
            this.firstBox = this.lastBox = newBox;  // If list is empty, both first and last point to the new box
            return;
        }
        this.lastBox.next = newBox;
        newBox.previous = this.lastBox;
        this.lastBox = newBox;  // Move lastBox pointer to the new box
    }

    // Delete all occurrences of a key
    deleteAllOccurrences(key) {
        let temp = this.firstBox;

        // Traverse the list and delete all occurrences of the key
        while (temp) {
            if (temp.data === key) {
                // If it's the first box
                if (temp === this.firstBox) {
                    this.firstBox = temp.next;
                    if (this.firstBox) {
                        this.firstBox.previous = null;  // Update the previous pointer of the new first box
                    }
                } else {
                    temp.previous.next = temp.next;  // Update the previous node's next pointer
                }

                // If it's the last box
                if (temp === this.lastBox) {
                    this.lastBox = temp.previous;
                    if (this.lastBox) {
                        this.lastBox.next = null;  // Update the next pointer of the new last box
                    }
                } else {
                    if (temp.next) {
                        temp.next.previous = temp.previous;  // Update the next node's previous pointer
                    }
                }
            }
            temp = temp.next; // Move to the next node
        }
    }

    // Display the linked boxes
    display() {
        let temp = this.firstBox;
        let result = [];
        while (temp) {
            result.push(temp.data);
            temp = temp.next;
        }
        console.log(result.join(" ⇄ "));
    }
}

// Example Usage:
let dblBoxes = new DoublyLinkedBoxes();
dblBoxes.insert(2);
dblBoxes.insert(4);
dblBoxes.insert(2);
dblBoxes.insert(5);
dblBoxes.insert(2);
dblBoxes.insert(6);

console.log("Original Doubly Linked Boxes:");
dblBoxes.display();

dblBoxes.deleteAllOccurrences(5); // Delete all occurrences of 2
console.log("After deleting all occurrences of 2:");
dblBoxes.display();
