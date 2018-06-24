import landPerimeter from './solution';

describe('landPerimeter', () => {
    it('should return the perimeter of all the islands', () => {
        expect(landPerimeter(
            ["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"])
        ).toEqual("Total land perimeter: 60");
        expect(landPerimeter(['XOOXO',
            'XOOXO',
            'OOOXO',
            'XXOXO',
            'OXOOO']
        )).toEqual("Total land perimeter: 24");
        expect(landPerimeter(['XOOO',
            'XOXO',
            'XOXO',
            'OOXX',
            'OOOO'])).toEqual("Total land perimeter: 18");
    });
});