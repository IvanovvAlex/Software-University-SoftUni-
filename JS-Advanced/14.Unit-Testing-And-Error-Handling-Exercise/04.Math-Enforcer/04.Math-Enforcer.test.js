const { assert } = require('char');
const mathEnforcer = require('./04.Math-Enforcer');

describe('check mathEnforcer', () => {
    it('addFive non number input returns undefined', () => {
        assert.isUndefined(mathEnforcer.addFive('notANumber'));
    })

    it('addFive number input sums it', () => {
        assert.equal(mathEnforcer.addFive(5), 10);
    })

    it('addFive floating number input sums it', () => {
        assert.equal(mathEnforcer.addFive(5.5), 10.5);
    })

    it('addFive negative number input sums it', () => {
        assert.equal(mathEnforcer.addFive(-5), 0);
    })

    it('substractTen non number input returns undefined', () => {
        assert.isUndefined(mathEnforcer.subtractTen('notANumber'));
    })

    it('substractTen number input subtracts it', () => {
        assert.equal(mathEnforcer.subtractTen(10), 0);
    })

    it('substractTen floating number input subtracts it', () => {
        assert.equal(mathEnforcer.subtractTen(9.5), -0.5);
    })

    it('substractTen negative number input subtracts it', () => {
        assert.equal(mathEnforcer.subtractTen(-10), -20);
    })

    it('sum number input sums it', () => {
        assert.equal(mathEnforcer.sum(5, 5), 10);
    })

    it('sum floating number input sums it', () => {
        assert.equal(mathEnforcer.sum(5.5, 5), 10.5);
    })

    it('sum two floating number inputs sums it', () => {
        assert.equal(mathEnforcer.sum(5.5, 5.5), 11);
    })

    it('sum negative number input sums it', () => {
        assert.equal(mathEnforcer.sum(-5, 5), 0);
    })

    it('sum two negative number inputs sums it', () => {
        assert.equal(mathEnforcer.sum(-5, -5), -10);
    })

    it('sum non number first input returns undefined', () => {
        assert.isUndefined(mathEnforcer.sum('notANumber', 5));
    })

    it('sum non number second input returns undefined', () => {
        assert.isUndefined(mathEnforcer.sum(5, 'notANumber'));
    })

    it('sum non number both inputs returns undefined', () => {
        assert.isUndefined(mathEnforcer.sum('5', 'notANumber'));
    })
})