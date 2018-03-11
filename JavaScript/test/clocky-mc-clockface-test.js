const whatTimeIsIt = require('../clocky-mc-clock-face/solution');
const expect = require('chai').expect;

describe("Example Tests", () => {
    it("ex1", () => {
        expect(whatTimeIsIt(0)).to.equal("12:00");
    });

    it("ex2", () => {
        expect(whatTimeIsIt(90)).to.equal("03:00");
    });

    it("ex3", () => {
        expect(whatTimeIsIt(180)).to.equal("06:00");
    });

    it("ex4", () => {
        expect(whatTimeIsIt(270)).to.equal("09:00"); 
    });

    it("ex5", () => {  
        expect(whatTimeIsIt(360)).to.equal("12:00");    
    }); 
});