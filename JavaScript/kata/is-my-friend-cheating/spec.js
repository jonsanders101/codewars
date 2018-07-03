import removeNb from './solution';

describe('removeNb', () => {
    it('should return array of possible solutions', () => {
        expect(removeNb(26)).toEqual([[15, 21], [21, 15]]);
        expect(removeNb(100)).toEqual([]);
    });
});