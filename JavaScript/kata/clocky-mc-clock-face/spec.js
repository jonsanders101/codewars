import whatTimeIsIt from './solution';

describe("Example Tests", () => {
    it("ex1", () => {
        expect(whatTimeIsIt(0)).toEqual("12:00");
    });

    it("ex2", () => {
        expect(whatTimeIsIt(90)).toEqual("03:00");
    });

    it("ex3", () => {
        expect(whatTimeIsIt(180)).toEqual("06:00");
    });

    it("ex4", () => {
        expect(whatTimeIsIt(270)).toEqual("09:00"); 
    });

    it("ex5", () => {  
        expect(whatTimeIsIt(360)).toEqual("12:00");    
    }); 
});