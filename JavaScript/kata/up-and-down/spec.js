import arrange from  './solution';

describe('arrange', () => {
    it('should reorder the string per the kata instructions', () => {
        expect(arrange("after be arrived two My so")).toEqual("be ARRIVED two AFTER my SO");
    });
});