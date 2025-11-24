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
    insert(index, data){
        if(index < 0 || index > this.length){
            console.log("Index out of bounds");
            return;
        }
        //shifting condition
        for(let i = this.length; i > index; i--){
            this.data[i] = this.data[i-1];
        }
        this.data[index] = data;
        this.length++;
    }
}

arr = new Array([4,2,3]);
arr.insert(3,50);
arr.traverse();