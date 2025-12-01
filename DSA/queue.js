class Queue{
    constructor(){
        this.data = {};
        this.frontIndex = 0;
        this.rearIndex = -1;
    }

    enqueue(element){
    this.rearIndex++;
    this.data[this.rearIndex] = element;
    }

    traverse(){
        let output = "";
        for(let i = this.frontIndex; i <= this.rearIndex; i++){
        output += this.data[i] + " ";
        }
        return output;
    // console.log(output);
    
    }

    //utility functions
    is_empty(){
        return this.frontIndex > this.rearIndex;
    }
    front(){
        //correction Statement
        if(this.is_empty()) return null;
        return this.data[this.frontIndex];
    }

    size(){
        return this.rearIndex - this.frontIndex + 1;
    }

    dequeue(){
        //correction Statement
        if(this.is_empty()) return null;

        const value = this.data[this.frontIndex];
        delete this.data[this.frontIndex];
        this.frontIndex++;
        return value;
    }

}

let queue1 = new Queue();
queue1.enqueue(4);
queue1.enqueue(2);
queue1.enqueue(3);
// queue1.traverse(); // Output: 10 20 30  
// console.log(queue1.is_empty()); // Output: true
// console.log(queue1.front()); // Output: 4
// console.log(queue1.size()); // Output: 3
console.log(queue1.traverse());
console.log("The front value " + queue1.dequeue() + " is dequeue"); 
console.log(queue1.traverse());