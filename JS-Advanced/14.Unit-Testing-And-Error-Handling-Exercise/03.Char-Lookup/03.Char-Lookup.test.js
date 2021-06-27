const { assert } = require('chai');
const lookupChar = require('./03.Char-Lookup');

describe('check lookupChar', () => {
    it('first param not string returns undefined', () => {
        assert.isUndefined(lookupChar(1234, 1));
    })

    it('second param not number returns undefined', () => {
        assert.isUndefined(lookupChar('12', '123'));
    })

    it('both params incorrect returns undefined', () => {
        assert.isUndefined(lookupChar(12, '123'));
    })

    it('index incorrect too low', () => {
        assert.equal(lookupChar('hello', -1), "Incorrect index");
    })

    it('index incorrect too high', () => {
        assert.equal(lookupChar('hello', 8), "Incorrect index");
    })

    it('index floating returns undefined', () => {
        assert.isUndefined(lookupChar('hello', 1.1));
    })
    
    it('index incorrect if input is char', () => {
        assert.equal(lookupChar('h', 1), "Incorrect index");
    })

    it('works correctly', () => {
        assert.equal(lookupChar('hello', 0), 'h');
        assert.equal(lookupChar('hello', 1), 'e');
        assert.equal(lookupChar('hello', 2), 'l');
        assert.equal(lookupChar('hello', 3), 'l');
        assert.equal(lookupChar('hello', 4), 'o');
    })
})