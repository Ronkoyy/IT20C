class Stack {
    constructor() {
        this.data = [];
        this.topIndex = -1;
    }

    traverse() {
        let output = '';
        for (let i = this.topIndex; i >= 0; i--) {
            output += this.data[i] + ' ';
        }
        console.log(output);
    }

    push(element) {
        this.topIndex++;
        this.data[this.topIndex] = element;
    }

    is_empty() {
        return this.topIndex === -1;
    }

    peek() {
        if (this.is_empty()) return null;
        return this.data[this.topIndex];
    }

    pop() {
        if (this.is_empty()) return null;

        let value = this.data[this.topIndex];
        delete this.data[this.topIndex];
        this.topIndex--;
        return value;
    }

    size() {
        return this.topIndex + 1;
    }
}

let stack1 = new Stack();
stack1.push(2);
stack1.traverse();

stack1.push(3);
stack1.traverse();

stack1.push(1);
stack1.traverse();

console.log("Top element is: " + stack1.peek());

console.log("Top element " + stack1.pop() + " is popped, the top element is " + stack1.peek());

console.log("New Stack size is: " + stack1.size());

stack1.traverse();
