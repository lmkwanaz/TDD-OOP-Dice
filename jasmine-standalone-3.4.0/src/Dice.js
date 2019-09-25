class Dice{
    
    constructor(sides){
        this.sides=sides;
        this.value;

        if(arguments.length==2)
        {
            this.probability = arguments[1]; 
            if(this.sides!=this.probability.length) throw new Error ("The length of the array is not equal to the sides").message;
            let sum=0;

            for(let a=0;a<this.sides;a++)
            {
                if(this.probability[a]<0) throw new Error ("negative probabilities not allowed").message;
                sum+=this.probability[a];
            }
            if(sum<0) throw new Error ("probability sum must be greater than 0").message;
        }
        
}

    

    roll(){
        this.value= Math.round(Math.random() * (this.sides -1) + 1);
    }
   

}



let dice= new Dice(6);
dice.roll();

console.log(`The value of dice = ${dice.value}`);

// console.log(dice);
let dice2= new Dice(6,[1,2,1,1,1,1]);
// console.log(dice2.error_Handlng);
