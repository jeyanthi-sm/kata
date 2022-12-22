import {toRomanNumeral} from './romanNumerals.js';

test("returns I when 1 is passed", () => {
    expect(toRomanNumeral(1)).toBe("I");
});

test("returns II when 2 is passed", () => {
    expect(toRomanNumeral(2)).toBe("II");
});

test("returns III when 3 is passed", () => {
    expect(toRomanNumeral(3)).toBe("III");
});

test("returns IV when 4 is passed", () => {
    expect(toRomanNumeral(4)).toBe("IV");
});

test("returns V when 5 is passed", () => {
    expect(toRomanNumeral(5)).toBe("V");
});

test("returns VI when 6 is passed", () => {
    expect(toRomanNumeral(6)).toBe("VI");
});

test("returns VII when 7 is passed", () => {
    expect(toRomanNumeral(7)).toBe("VII");
});

test("returns VIII when 8 is passed", () => {
    expect(toRomanNumeral(8)).toBe("VIII");
});

test("returns IX when 9 is passed", () => {
    expect(toRomanNumeral(9)).toBe("IX");
});

test("returns X when 10 is passed", () => {
    expect(toRomanNumeral(10)).toBe("X");
});




