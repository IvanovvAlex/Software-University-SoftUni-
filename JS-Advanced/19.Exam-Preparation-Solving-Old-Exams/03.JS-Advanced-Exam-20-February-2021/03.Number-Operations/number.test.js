const numberOperations = require('./03. Number Operations');
const { assert } = require('chai');

describe('NumberOperations', () => {
    describe('powNumber', () => {
        it('returns the power of a number', () => {
            assert.equal(numberOperations.powNumber(10), 100);
        })

        it('returns the power of a negative number', () => {
            assert.equal(numberOperations.powNumber(-10), 100);
        })

        it('returns the power of zero', () => {
            assert.equal(numberOperations.powNumber(0), 0);
        })
    })

    describe('numberChecker', () => {
        it('validates if a number is less than 100', () => {
            assert.equal(numberOperations.numberChecker(1), 'The number is lower than 100!');
        })

        it('validates the number 100', () => {
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
        })

        it('validates a number that it greater than 100', () => {
            assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!');
        })

        it('parses a number and validates it, less than 100', () => {
            assert.equal(numberOperations.numberChecker('1'), 'The number is lower than 100!');
        })

        it('parses a number and validates it, 100', () => {
            assert.equal(numberOperations.numberChecker('100'), 'The number is greater or equal to 100!');
        })

        it('parses a number and validates it, greater than 100', () => {
            assert.equal(numberOperations.numberChecker('101'),'The number is greater or equal to 100!');
        })

        it('throws error when given NaN', () => {
            assert.throws(numberOperations.numberChecker('Peter'));
        })

        it('throws error when given object', () => {
            assert.throws(numberOperations.numberChecker({ a, d }));
        })

        it('throws error when given array', () => {
            assert.throws(numberOperations.numberChecker(['a', 'd']));
        })
    })

    describe('sumArrays', () => {
        it('sums arrays correctly', () => {
            assert.equal(numberOperations.sumArrays([1, 1], [2, 2])).to.eql([3, 3]);
        })

        it('sums different length arrays correctly', () => {
            assert.equal(numberOperations.sumArrays([1, 1], [2, 2, 2]), [3, 3, 2]);
        })

        it('sums string arrays', () => {
            assert.equal(numberOperations.sumArrays(['a', 'b'], ['c', 'd']), ['ac', 'bd']);
        })

        it('returns empty array when given 2 empty arrays', () => {
            expect(numberOperations.sumArrays([], []), []);
        })
    })
})