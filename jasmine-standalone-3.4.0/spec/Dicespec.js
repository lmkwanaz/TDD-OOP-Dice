describe('Die returns value based on it sides and probability', ()=>{
    it('this would print a number between 1 and 6 inclusive', ()=>{
        let dice = new Dice(6);
    let isWithinRange = false;
    let value = dice.roll();
    if (value > 0 && value <= 6) {
      isWithinRange = true;
    }
    expect(isWithinRange).toBe(true);
    });
});

describe("Error handling", () => {
    it("Ensure the length of propabilities array is equal to the sides of the dice", () => {
      let dieDodgy6 = new Dice(6);
      try {
        dieDodgy6.setProbabilities([1, 1, 1, 1, 2]);
      } catch (e) {
        expect(e).toBeTruthy("The length of the array is not equal to the sides");
      }
    });
    it("Check negative propability", () => {
      let dieDodgy6 = new Dice(6);
      try {
        dieDodgy6.setProbabilities([1, 1, 1, 1, -1, 2]);
      } catch (e) {
        expect(e).toBeTruthy("negative probabilities not allowed");
      }
    });
  
    it("Ensure the sum of propabilities is greater than otherwise", () => {
      try {
        dieDodgy6.setProbabilities([0, 0, 0, 0, 0, 0]);
      } catch (e) {
        expect(e).toBeTruthy("probability sum must be greater than 0");
      }
    });
  
    it("Ensure that setPropertities only except integer value", () => {
      try {
        dieDodgy6.setProbabilities([1, 1, 1, 1.5, 1, 1]);
      } catch (e) {
        expect(e).toBeTruthy("only integer values allowed");
      }
    });
  });
  
  describe("Testing factory production", () => {
    it("Should produce the same dice", () => {
      let factory20 = new DiceFactory(20);
      let die20 = factory20.makeDice();
      let anotherDie = factory20.makeDice();
  
      expect(die20).toBe(anotherDie);
    });
  });
  