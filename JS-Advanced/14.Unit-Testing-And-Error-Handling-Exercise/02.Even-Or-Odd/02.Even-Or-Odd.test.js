const { assert } = require('chai');
const isOddOrEven = require('./02.Even-Or-Odd');

describe('check isOddOrEven', () => {
    it('non string input returns undefined', () => {
        assert.isUndefined(isOddOrEven(1));
    })

    it('even string returns even', () => {
        assert.equal(isOddOrEven('12345678'), 'even');
    })

    it('odd string returns odd', () => {
        assert.equal(isOddOrEven('123456789'), 'odd');
    })
})