const dealership = require('./dealership');
const { assert } = require('chai');

describe('testing dealership', () => {
    describe('testing newCarCost', () => {
        it('returns original price when model unsupported', () => {
            assert.equal(dealership.newCarCost('a', 1), 1);
        })

        it('returns discounted price', () => {
            assert.equal(dealership.newCarCost('Audi A4 B8', 30000), 15000);
        })
    })

    describe('testing carEquipment', () => {
        it('works with single element', () => {
            assert.deepEqual(dealership.carEquipment(['a'], [0]), ['a']);
        })

        it('works with more elements case 1', () => {
            assert.deepEqual(dealership.carEquipment(['a', 'b', 'c'], [0, 2]), ['a', 'c']);
        })

        it('works with more elements case 2', () => {
            assert.deepEqual(dealership.carEquipment(['a', 'b', 'c'], [1]), ['b']);
        })
    })

    describe('testing euroCategory', () => {
        it('category is below treshhold', () => {
            assert.equal(dealership.euroCategory(1), 'Your euro category is low, so there is no discount from the final price!');
        })

        it('category is above treshhold', () => {
            assert.equal(dealership.euroCategory(5), `We have added 5% discount to the final price: 14250.`);
        })

        it('category is at treshhold', () => {
            assert.equal(dealership.euroCategory(4), `We have added 5% discount to the final price: 14250.`);
        })
    })
})

