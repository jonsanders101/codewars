import findUniq from './solution';

describe('findUniq', () => {
    it('should find the one unique number in an array', () => {
        expect(findUniq([ 1, 1, 1, 2, 1, 1 ])).toEqual(2);
        expect(findUniq([ 0, 0, 0.55, 0, 0 ])).toEqual(0.55);
        expect(findUniq([ 4, 4, 4, 3, 4, 4, 4, 4 ])).toEqual(3);
        expect(findUniq([ 5, 5, 5, 5, 4, 5, 5, 5 ])).toEqual(4);
        expect(findUniq([ 6, 6, 6, 6, 6, 5, 6, 6 ])).toEqual(5);
        expect(findUniq([ 2, 1, 2, 2, 2, 2, 2, 2 ])).toEqual(1);
        expect(findUniq([ 0, 1, 1, 1, 1, 1, 1, 1 ])).toEqual(0);
    })
});