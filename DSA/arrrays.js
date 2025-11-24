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
}

arr = new Array([4,2,3]);
arr.traverse();