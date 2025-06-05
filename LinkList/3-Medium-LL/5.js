// Node class to create linked list nodes
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Function to detect cycle and find the starting node of the cycle
function findCycleStart(head) {
    let slow = head, fast = head;
    let hasCycle = false;

    // Step 1: Detect Cycle
    while (fast && fast.next) {
        slow = slow.next;       // Move slow pointer by 1 step
        fast = fast.next.next;  // Move fast pointer by 2 steps

        if (slow === fast) {    // If they meet, cycle is detected
            hasCycle = true;
            break;
        }
    }

    // Step 2: Find the starting node of the cycle
    if (hasCycle) {
        slow = head; // Move slow pointer back to the head

        while (slow !== fast) { // Move both one step at a time
            slow = slow.next;
            fast = fast.next;
        }

        return slow; // This is the starting node of the cycle
    }

    return null; // No cycle found
}

// Function to create a linked list from an array
function createLinkedList(arr, cycleIndex = -1) {
    if (arr.length === 0) return null;

    let nodes = arr.map(value => new ListNode(value)); // Create nodes
    for (let i = 0; i < arr.length - 1; i++) {
        nodes[i].next = nodes[i + 1]; // Connect nodes
    }

    if (cycleIndex !== -1) {
        nodes[nodes.length - 1].next = nodes[cycleIndex]; // Create cycle
    }

    return nodes[0]; // Return head of linked list
}

// Example 1: Linked List with a Cycle
let head1 = createLinkedList([1, 2, 3, 4, 5, 6, 7], 2); // Cycle starts at node with value 3
console.log(findCycleStart(head1)?.value); // Output: 3

// Example 2: Linked List without a Cycle
let head2 = createLinkedList([1, 2, 3, 4, 5, 6, 7]);
console.log(findCycleStart(head2)); // Output: null
