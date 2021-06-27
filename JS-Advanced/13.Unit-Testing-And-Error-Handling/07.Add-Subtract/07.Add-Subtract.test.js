const { expect } = require('chai');
const createCalculator = require('./07.Add-Subtract');

describe('Add-Subtract', () => {

    let calculator;

    beforeEach(function() {
        calculator = createCalculator();
    })

    it('returns module with add', () => {
        expect(Object.keys(calculator).includes('add')).to.true;
    })

    it('returns module with subtract', () => {
        expect(Object.keys(calculator).includes('subtract')).to.true;
    })

    it('returns module with get', () => {
        expect(Object.keys(calculator).includes('get')).to.true;
    })


    it('returns value of sum when calling get', () => {
        expect(calculator.get()).to.equal(0);
    })

    it('returns false when searching for set', () => {
        expect(Object.keys(calculator).includes('set')).to.false;
    })

    it('adds valid argument to sum when calling add', () => {
        calculator.add(1);
        expect(calculator.get()).to.equal(1);
    })

    it('parses valid string argument and adds to sum when calling add', () => {
        calculator.add('1');
        expect(calculator.get()).to.equal(1);
    })

    it('subtracts valid argument from sum when calling subtract', () => {
        calculator.subtract(1);
        expect(calculator.get()).to.equal(-1);
    })

    it('parses valid string argument and subtracts from sum when calling subtract', () => {
        calculator.subtract('1');
        expect(calculator.get()).to.equal(-1);
    })

    it('calling add with invalid argument returns NaN', () => {
        calculator.add('Mimi');
        expect(calculator.get()).to.NaN;
    })

    it('calling subtract with invalid argument returns NaN', () => {
        calculator.subtract('Mimi');
        expect(calculator.get()).to.NaN;
    })
})