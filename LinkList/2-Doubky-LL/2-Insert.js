class Node {
    constructor(data) {
      this.data = data;
      this.before = null;
      this.after = null;
    }
  }
  class DoublyLinked {
    constructor() {
      this.first = null;
      this.last = null;
    }
  
    insertAtEnd(data) {
      const NewNode = new Node(data) 
  
      if(this.first === null) {
          this.first = NewNode;
          this.last = NewNode;
      } else {
          this.last.after = NewNode;
          NewNode.before = this.last;
          this.last = NewNode;
      }
    }
    display() {
      let current = this.first;
      let result = "";
      while (current !== null) {
          result += current.data + (current.after ? " <-> " : "");
          current = current.after;
      }
      console.log("DLL:", result);
  }
  }
  
  
  let dll1 = new DoublyLinked();
  dll1.insertAtEnd(1);
  dll1.insertAtEnd(2);
  dll1.insertAtEnd(3);
  dll1.insertAtEnd(4);
  dll1.insertAtEnd(6);  // Inserting at the end
  dll1.display();