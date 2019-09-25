class Dice{
   
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
        this.value= Math.round(Math.random() * (this.sides -1) + 1);
    }

    setProbabilities(arr){
        for(var i =0; i<arr.length;i++){
            if(Number.isInteger(arr[i])===false) throw new 
            Error("only integer values allowed").message;
        }
    this.probability=arr;
    this.error_Handling();


    }


    error_Handling(){
        if(this.sides!=this.probability.length) throw new Error ("The length of the array is not equal to the sides").message;
        let sum=0;

        for(let a=0;a<this.sides;a++)
        {
            if(this.probability[a]<0) throw new Error ("negative probabilities not allowed").message;
            sum+=this.probability[a];
        }
        if(sum<=0) throw new Error ("probability sum must be greater than 0").message;


    }
   

}



let dice= new Dice(6);
dice.roll();

console.log(`The value of dice = ${dice.value}`);

// console.log(dice);
let dice2= new Dice(6);
let arr2=dice2.setProbabilities([1,1,2.5,3,1,1]);
console.log(dice2);

// console.log(dice2.error_Handlng);
