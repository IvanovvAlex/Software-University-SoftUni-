const rgbToHexColor = require('./06.RGB-To-Hex');
const { expect } = require('chai');

describe('RGB works', () => {
    it('return white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    })

    it('returns black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    })

    it('return other color', () => {
        expect(rgbToHexColor(255, 141, 46)).to.equal('#FF8D2E');
    })

    it('return undefined for negative', () => {
        expect(rgbToHexColor(-1, 1, 0)).undefined;
    })

    it('return undefined for negative', () => {
        expect(rgbToHexColor(1, -1, 0)).undefined;
    })

    it('return undefined for negative', () => {
        expect(rgbToHexColor(1, 1, -1)).undefined;
    })

    it('return undefined for out of range number', () => {
        expect(rgbToHexColor(256, 1, 0)).undefined;
    })

    it('return undefined for out of range number', () => {
        expect(rgbToHexColor(1, 256, 0)).undefined;
    })

    it('return undefined for out of range number', () => {
        expect(rgbToHexColor(1, 1, 256)).undefined;
    })

    it('return undefined for invalid input type', () => {
        expect(rgbToHexColor('1', 1, 0)).undefined;
    })

    it('return undefined for invalid input type', () => {
        expect(rgbToHexColor(1, [], 0)).undefined;
    })

    it('return undefined for invalid input type', () => {
        expect(rgbToHexColor(1, 1, {})).undefined;
    })
})