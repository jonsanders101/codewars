import pattern from './solution';

describe('Pattern', () => {
    it('should return the correct pattern', () => {
        expect(pattern(7)).toEqual("      1      \n     121     \n    12321    \n   1234321   \n  123454321  \n 12345654321 \n1234567654321");
        expect(pattern(1)).toEqual("1");
        expect(pattern(4)).toEqual("   1   \n  121  \n 12321 \n1234321");
        expect(pattern(0)).toEqual("");
        expect(pattern(-25)).toEqual("");
    });
});