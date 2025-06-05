class Box {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedBoxes{
    constructor() {
        this.firstBox = null;  // Points to the first box
        this.lastBox = null;   // Points to the last box
    }

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

    findPairsWithSum(targetSum) {
        let left = this.firstBox;
        let right = this.lastBox;
        let pairs = [];

        while (left && right && left !== right && left.previous !== right) {
            let currentSum = left.data + right.data;

            if (currentSum === targetSum) {
                pairs.push([left.data, right.data]);
                left = left.next;  // Move left pointer to the right
                right = right.previous;  // Move right pointer to the left
            } else if (currentSum < targetSum) {
                left = left.next;  // Increase the sum by moving the left pointer
            } else {
                right = right.previous;  // Decrease the sum by moving the right pointer
            }
        }

        return pairs;  // Return the array of pairs
    }

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

let dblBoxes = new DoublyLinkedBoxes();
dblBoxes.insert(1);
dblBoxes.insert(2);
dblBoxes.insert(3);
dblBoxes.insert(4);
dblBoxes.insert(5);
dblBoxes.insert(6);

console.log("Original Doubly Linked Boxes:");
dblBoxes.display();

let targetSum = 4;
let pairs = dblBoxes.findPairsWithSum(targetSum);
console.log(`Pairs with sum ${targetSum}:`, pairs);