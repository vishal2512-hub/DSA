class Box{
    constructor(value) {
        this.value = value;
        this.after = null;
        this.before = null;
    }
}
    class BoxChain {
        constructor() {
            this.firstbox = null;
            this.lastbox = null;
        }

        addBoxToEnd(newValue) {
            const newBox = new Box(newValue);
            if(this.firstbox === null) {
                this.firstbox = newBox;
                this.lastbox = newBox;
            } else {
                this.lastbox.after = newBox;
                newBox.before = this.lastbox;
                this.lastbox = newBox;
            }
        }
        removeLastBox() {
            if(!this.lastbox) return;

            if(this.firstbox === this.lastbox) {
                this.firstbox = null;
                this.lastbox = null;
            } else {
                this.lastbox = this.lastbox.before;
                this.lastbox.after = null;
            }
        }

        showChain() {
            let current = this.firstbox;
            let result = "";
            while (current !== null) {
                result += current.value + (current.after ? " <-> " : "");;
                current = current.after;
            }
            console.log("Box Chain:", result);

        }
    }


    let boxes1 = new BoxChain();
    boxes1.addBoxToEnd(1);
    boxes1.addBoxToEnd(3);
    boxes1.addBoxToEnd(4);
    boxes1.addBoxToEnd(1);
    console.log("Before Removing Last Box:");
    boxes1.showChain();
    boxes1.removeLastBox(); // Remove the last box
    console.log("After Removing Last Box:");
    boxes1.showChain();
    
    // Example 2
    let boxes2 = new BoxChain();
    boxes2.addBoxToEnd(7);
    boxes2.addBoxToEnd(5);
    console.log("\nBefore Removing Last Box:");
    boxes2.showChain();
    boxes2.removeLastBox(); // Remove the last box
    console.log("After Removing Last Box:");
    boxes2.showChain();