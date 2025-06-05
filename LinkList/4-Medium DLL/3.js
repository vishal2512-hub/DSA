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

    // Remove duplicates from the sorted DLL
    removeDuplicates() {
        let current = this.firstBox;

        while (current && current.next) {
            if (current.data === current.next.data) {
                // Duplicate found, remove the next node
                let duplicate = current.next;
                current.next = duplicate.next;
                if (duplicate.next) {
                    duplicate.next.previous = current;  // Update previous pointer of the next node
                }
                duplicate.next = null;  // Clear the next pointer of the duplicate node
                duplicate.previous = null;  // Clear the previous pointer of the duplicate node
            } else {
                current = current.next;  // Move to the next node if no duplicate
            }
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
dblBoxes.insert(1);
dblBoxes.insert(1);
dblBoxes.insert(2);
dblBoxes.insert(3);
dblBoxes.insert(3);
dblBoxes.insert(4);
dblBoxes.insert(4);

console.log("Original Doubly Linked Boxes:");
dblBoxes.display();

dblBoxes.removeDuplicates();  // Remove duplicates
console.log("After removing duplicates:");
dblBoxes.display();
