const { expect } = require('chai');
const sum = require('./04.Sum-Of-Numbers');

describe('Sum numbers', () => {
    it('sums single number', () => {
        expect(sum([1])).to.equal(1);
    })

    // Test Overloading

    it('sums multiple numbers', () => {
        expect(sum([1, 1])).to.equal(2);
    })

    it('sums different numbers', () => {
        expect(sum([2, 4, 6])).to.equal(12);
    })
})