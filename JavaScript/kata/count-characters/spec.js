import count from './solution';

describe('Count', () => {
    it('should return a count of characters in a string', () => {
        expect(count('aba')).toEqual({'a': 2, 'b':1});
        expect(count('')).toEqual({});
        expect(count('xixixiiipa')).toEqual({'x': 3, 'i': 5, 'p': 1, 'a':1});
    });
});