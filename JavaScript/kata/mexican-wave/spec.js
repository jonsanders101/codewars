import wave from './solution';

describe('wave', () => {
    it('should return an array of correctly waving strings', () => {
        expect(wave('this is a few words')).toEqual(['This is a few words', 'tHis is a few words', 'thIs is a few words', 'thiS is a few words', 'this Is a few words', 'this iS a few words', 'this is A few words', 'this is a Few words', 'this is a fEw words', 'this is a feW words', 'this is a few Words', 'this is a few wOrds', 'this is a few woRds', 'this is a few worDs', 'this is a few wordS']);
        expect(wave('')).toEqual([]);
        expect(wave(' gap ')).toEqual([" Gap ", " gAp ", " gaP "]);
    });
});