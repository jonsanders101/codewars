import animals from './solution';

describe('animals', () => {
    it('should return quantity of chickens and cows', () => {
        expect(animals(0,0)).toEqual([0,0]);
        expect(animals(2,3)).toEqual("No solutions");
        expect(animals(10,34)).toEqual([3, 7]);
        expect(animals(17,68)).toEqual([0, 17]);
        expect(animals(23,46)).toEqual([23, 0]);
    });
});