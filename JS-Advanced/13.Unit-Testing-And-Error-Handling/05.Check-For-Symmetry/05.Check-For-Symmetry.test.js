const { expect } = require('chai');
const isSymmetric = require('./05.Check-For-Symmetry');

describe('isSymmetric', () => {
    it('returns true for valid symmetric input', () => {
        expect(isSymmetric([1, 1])).to.true;
    })

    it('returns false for valid non-symmetric input', () => {
        expect(isSymmetric([1, 2])).to.false;
    })

    it('returns false for invalid input', () => {
        expect(isSymmetric('a')).to.false;
    })

    it('returns false for valid non-symmetric input', () => {
        expect(isSymmetric([1, 2])).to.false;
    })

    it('returns true for valid symmetric odd-element input', () => {
        expect(isSymmetric([1, 1, 1])).to.true;
    })

    it('returns true for valid symmetric string input', () => {
        expect(isSymmetric(['a', 'a'])).to.true;
    })

    it('returns false for valid non-symmetric string input', () => {
        expect(isSymmetric(['a', 'a', 'b'])).to.false;
    })

    it('returns false for number-string symmetric input', () => {
        expect(isSymmetric(['1', 1])).to.false;
    })
})