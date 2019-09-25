describe('A Person class should have details of',()=>{
    it('should return name, age, gender and interests', ()=>{
        let person = new Person('makhenzo', 18, 'male', ['music', 'soccer', 'reading']);
        let greeting =  person.hello();
        console.log(greeting);
        
        expect(greeting).toBe(`Hello, my name is makhenzo and I am 18 years old. My interests are being a music,soccer and reading`);
    });
});