// 🔹 Step 1: Create a Box (Node) for the Linked List
class Box {
    constructor(value) {
        this.value = value;  // Stores the number inside the box (node)
        this.before = null;  // Pointer to the previous box (prev)
        this.after = null;   // Pointer to the next box (next)
    }
}

// 🔹 Step 2: Create a BoxChain (Doubly Linked List)
class BoxChain {
    constructor() {
        this.firstBox = null; // First box in the chain (head)
        this.lastBox = null;  // Last box in the chain (tail)
    }

    // 🔹 Step 3: Add a New Box at the END
    addBoxToEnd(newValue) {
        let newBox = new Box(newValue); // Create a new box (node)

        // If there is no box in the chain, make this box the first and last
        if (this.firstBox === null) {
            this.firstBox = newBox;
            this.lastBox = newBox;
        } else {
            // Connect the current lastBox to the new box
            this.lastBox.after = newBox;
            newBox.before = this.lastBox;

            // Update lastBox to be the new box
            this.lastBox = newBox;
        }
    }

    // 🔹 Step 4: Reverse the BoxChain (Doubly Linked List)
    reverseChain() {
        let current = this.firstBox; // Start from the first box
        let temp = null; // Temporary variable for swapping

        // Traverse through each box and swap the before and after pointers
        while (current !== null) {
            // Swap before and after pointers
            temp = current.before;
            current.before = current.after;
            current.after = temp;

            // Move to the next box (which is actually the previous box in original order)
            current = current.before;
        }

        // Swap firstBox and lastBox to complete the reversal
        temp = this.firstBox;
        this.firstBox = this.lastBox;
        this.lastBox = temp;
    }

    // 🔹 Step 5: Display the BoxChain
    showChain() {
        let current = this.firstBox;
        let result = "";

        // Traverse the chain and build the output string
        while (current !== null) {
            result += current.value + (current.after ? " <-> " : ""); 
            current = current.after;
        }

        console.log("Box Chain:", result);
    }
}

// 🔹 Example 1: Reverse a DLL with multiple nodes
let boxes1 = new BoxChain();
boxes1.addBoxToEnd(1);
boxes1.addBoxToEnd(2);
boxes1.addBoxToEnd(3);
boxes1.addBoxToEnd(4);

console.log("Before Reversing:");
boxes1.showChain();

boxes1.reverseChain(); // Reverse the list

console.log("After Reversing:");
boxes1.showChain(); // Output: 4 <-> 3 <-> 2 <-> 1

// 🔹 Example 2: Reverse a DLL with different numbers
let boxes2 = new BoxChain();
boxes2.addBoxToEnd(10);
boxes2.addBoxToEnd(20);
boxes2.addBoxToEnd(30);

console.log("\nBefore Reversing:");
boxes2.showChain();

boxes2.reverseChain(); // Reverse the list

console.log("After Reversing:");
boxes2.showChain(); // Output: 30 <-> 20 <-> 10
