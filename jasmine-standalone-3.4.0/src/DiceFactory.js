let Dice = require('./Dice');

module.exports = class DiceFactory
{
    constructor(dice)
    {
        this.dice=dice
    
        
    }

    makeDice(){
        return this.dice;
    }
    


}
// let dice= new Dice(6);
// let factory20=new DiceFactory(dice);
// let die20 = factory20.makeDice();
// let anotherDie20= factory20.makeDice();

// console.log(die20);