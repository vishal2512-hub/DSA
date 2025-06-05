class Stack {
  constructor() {
    this.queue = [];
  }

  push(element) {
    this.queue.push(element);

    let size = this.queue.length;
    while(size > 1) {
        this.queue.push(this.queue.shift);
        size--;
    }
      console.log(`The element pushed is ${x}`);
  }
}
