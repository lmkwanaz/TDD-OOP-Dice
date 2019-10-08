// let DiceFactory = require('./DiceFactory');
class Dice {
   
    constructor(sides){
        this.sides=sides;
        this.value;
        this.list = [];
        
        if(arguments.length==2)
        {
            this.probability = arguments[1]; 
            this.error_Handling();
            
        }
        
} 


roll(){
      let getrand = [Math.round(Math.random() * this.sides)]
     
      
    this.value = getrand;
    
    
       return this.value 
    }

    setProbabilities(arr){
         
        for(var i =0; i<arr.length;i++){
            if(Number.isInteger(arr[i])===false) throw new 
            Error("only integer values allowed").message;
        }
    this.probability=arr;
    this.error_Handling();
    this.update();
    }

    update() {
 
        for (var index = 1; index <= this.sides; index++) {
          for (let b = 0; b < this.probability[index - 1]; b++) {
            this.list.push(index);
          }
        }
       
        
        let see = this.list[this.roll()];
        this.value = see;
        
        
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

let dice2= new Dice(6);
dice2.setProbabilities([1,1,1,1,1,2]);
console.log(dice2);


