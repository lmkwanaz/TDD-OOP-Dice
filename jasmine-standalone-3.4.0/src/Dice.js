let DiceFactory = require('./DiceFactory');
class Dice {
   
    constructor(sides){
        this.sides=sides;
        this.value;

        if(arguments.length==2)
        {
            this.probability = arguments[1]; 
            this.error_Handling();
            
        }
        
} 

roll(){
    
       return this.value= Math.round(Math.random() * (this.sides -1) + 1);
    }

    setProbabilities(arr){
        let list = [];
        for(var i =0; i<arr.length;i++){
            if(Number.isInteger(arr[i])===false) throw new 
            Error("only integer values allowed").message;
        }
    this.probability=arr;
    this.error_Handling();
    for(var index=0;index<this.sides;index++){
            list.push(index);
        }
    }


    error_Handling(){
        if(this.sides!=this.probability.length) throw new Error ("The length of the array is not equal to the sides").message;
        let sum=0;

        for(let a=0;a<this.sides;a++)
        {
            if(this.probability[a]<=0) throw new Error ("negative probabilities not allowed").message;
            sum+=this.probability[a];
        }
        if(sum<=0) throw new Error ("probability sum must be greater than 0").message;


    }
   

}

let dice2= new Dice(3);
dice2.roll();
dice2.setProbabilities([0,3,5]);
console.log(dice2);

