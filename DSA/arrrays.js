class Array{
    constructor(initalData = []){
        this.data ={};
        this.length = 0;

        for(let i = 0; i < initalData.length; i++){
            this.data[i] = initalData[i];
            this.length++;
        }
    }

    traverse(){
        let output = " ";

        for(let i = 0; i < this.length; i++){
            output += this.data[i] + " ";
        }
        console.log(output);
    }
    insert(index, element){
        if(index < 0 || index > this.length){
            console.log("Index out of bounds");
            return;
        }
        //shifting condition
        for(let i = this.length; i > index; i--){
            this.data[i] = this.data[i-1];
        }
        this.data[index] = element;
        this.length++;
    }
    search(element) {
    for (let i = 0; i < this.length; i++) {
        if (this.data[i] === element) {
            console.log("Element found at index: " + i);
            return i;   // stop here
        }
    }
    console.log(element + " is not found");
    return -1;
    }

   update(index, element){
    if(index < 0 || index >= this.length){
        console.log("Index out of bounds");
        return;
    }
    this.data[index] = element;
    }
    delete(index){
    if(index < 0 || index >= this.length){
        console.log("Invalid index");
        return;
    }
    //shiftoing condition
    for(let i = index; i < this.length - 1; i++){
        this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    }
}   

let arr = new Array([4,2,3]);

arr.traverse();
arr.update(1,50);
arr.traverse();
arr.delete(0);
arr.traverse();