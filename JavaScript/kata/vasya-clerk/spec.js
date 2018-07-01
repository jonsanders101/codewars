import tickets from './solution';

describe('tickets', () => {
    it('should correctly say whether a ticket can be sold to every customer', () => {
        expect(tickets([25, 25, 50, 50])).toEqual('YES');
        expect(tickets([25, 100])).toEqual('NO');
        expect(tickets([25, 25, 25, 25, 50, 100, 50])).toEqual('YES');
        expect(tickets([25,50,25,100,25,50,25,100,25,25,25,100,25,50,50,25])).toEqual('NO');
    });
});