import each from 'jest-each';
import { toRomanNumeral } from './romanNumerals.js';

describe('.toRomanNumeral()', () => {
    each([
        [1, "I"],
        [2, "II"],
        [3, "III"],
        [4, "IV"],
        [5, "V"],
        [6, "VI"],
        [7, "VII"],
        [8, "VIII"],
        [9, "IX"],
        [10, "X"],
    ]).test('returns the Roman Numerals of the inputNumber %d to %s', (inputNumber, expectedOutput) => {
        expect(toRomanNumeral(inputNumber)).toBe(expectedOutput);
    })
});

describe("returns %s when %d is passed", () => {
    const testing = toRomanNumeral()
    each([
        [1, "I"],
        [2, "II"],
        [3, "III"],
    ]).test('returns the Roman Numerals of the inputNumber %d to %s', (inputNumber, expectedOutput) => {
        expect(toRomanNumeral(inputNumber)).toBe(expectedOutput);
    });
});


