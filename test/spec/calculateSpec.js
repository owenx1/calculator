/**
 * Created by OwenNetworked on 26/03/2014.
 */
describe("My Calculator", function() {
    it("should add two numbers", function() {
        expect(Calculate.addTwoNums(2,3)).toBe(5);
    })
    it("should subtract two numbers", function() {
        expect(Calculate.subtractTwoNums(11,2)).toBe(9);
    })
    it("should multiply two numbers", function() {
        expect(Calculate.multiplyTwoNums(4,5)).toBe(20);
    })
    it("should divide two numbers", function() {
        expect(Calculate.divideTwoNums(35,5)).toBe(7);
    })
    it("should be able to deal with divide by zero", function() {
        expect(function() {Calculate.divideTwoNums(0,5)}).toThrow(new Error("Cannot divide by zero, enter another number"))
    })
    it("should be able to deal with strings", function(){
        expect(function() {Calculate.addTwoNums("hello",5)}).toThrow(new Error("hello or 5 is not a number"))
    })
})
