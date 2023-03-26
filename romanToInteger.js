function romanToInteger(romanNumeral) {
	let result = null;


	
	for (let i = 0; i < romanNumeral.length; i++) {
		switch (romanNumeral[i]) {
			case "M":
				result += 1000;
				break;
			case "D":
				result += 500;
				break;
			case "C":
				if (
					i < romanNumeral.length - 1 &&
					(romanNumeral[i + 1] === "M" || romanNumeral[i + 1] === "D")
				) {
					result -= 100;
				} else {
					result += 100;
				}
				break;
			case "L":
				result += 50;
				break;
			case "X":
				if (
					i < romanNumeral.length - 1 &&
					(romanNumeral[i + 1] === "C" || romanNumeral[i + 1] === "L")
				) {
					result -= 10;
				} else {
					result += 10;
				}
				break;
			case "V":
				result += 5;
				break;
			case "I":
				if (
					i < romanNumeral.length - 1 &&
					(romanNumeral[i + 1] === "X" || romanNumeral[i + 1] === "V")
				) {
					result -= 1;
				} else {
					result += 1;
				}
				break;
			default:
				return null; // Invalid character in the input
		}
	}

	return result;
}

console.log(romanToInteger("XXIV")); // Output: 24
console.log(romanToInteger("LXIX")); // Output: 69
console.log(romanToInteger("MCMXCIV")); //
console.log(romanToInteger("VM"))

module.exports = romanToInteger;

