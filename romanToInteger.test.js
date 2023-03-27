const romanToInteger = require('./romanToInteger')

describe("romanToInteger", () => {
	it("should return the correct integer for valid input", () => {
		expect(romanToInteger("I")).toBe(1);
        expect(romanToInteger("II")).toBe(2);
		expect(romanToInteger("III")).toBe(3);
		expect(romanToInteger("IV")).toBe(4);
		expect(romanToInteger("V")).toBe(5);
		expect(romanToInteger("IX")).toBe(9);
		expect(romanToInteger("X")).toBe(10);
		expect(romanToInteger("XIII")).toBe(13);
		expect(romanToInteger("XXIV")).toBe(24);
		expect(romanToInteger("XL")).toBe(40);
		expect(romanToInteger("LXIX")).toBe(69);
		expect(romanToInteger("XC")).toBe(90);
		expect(romanToInteger("C")).toBe(100);
		expect(romanToInteger("D")).toBe(500);
		expect(romanToInteger("CM")).toBe(900);
		expect(romanToInteger("MCMXCIV")).toBe(1994);
	});

	it("should return null for invalid input", () => {
		expect(romanToInteger("")).toBe(null);
		expect(romanToInteger("Z")).toBe(null);
		expect(romanToInteger("IIII")).toBe(null);
		expect(romanToInteger("XXXX")).toBe(null);
		expect(romanToInteger("CCCC")).toBe(null);
		expect(romanToInteger("MMMM")).toBe(null);
		expect(romanToInteger("MCMXCVIIII")).toBe(null);
		expect(romanToInteger("MCMXCIVI")).toBe(null);
	});
});