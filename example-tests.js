function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

function reverseString(str) {
	return str.split('').reverse().join('');
}

function calculator(a, b) {
	return {
		abb: a + b,
		subract: a - b,
		divide: a / b,
		multiply: a * b,
	};
}

function caesarCipher(str, shift) {
	return str
		.split('')
		.map((char) => {
			if (char.match(/[a-z]/i)) {
				const charCode = char.charCodeAt(0);
				let newCharCode;

				if (charCode >= 65 && charCode <= 90) {
					newCharCode = ((charCode - 65 + shift) % 26) + 65;
				}

				if (charCode >= 97 && charCode <= 122) {
					newCharCode = ((charCode - 97 + shift) % 26) + 97;
				}

				return String.fromCharCode(newCharCode);
			}
			return char;
		})
		.join('');
}

function analyzeArray(array) {
	return {
		average: array.reduce((acc, num) => acc + num, 0) / array.length,
		length: array.length,
		max: Math.max(...array),
		min: Math.min(...array),
	};
}

module.exports = {
	capitalize,
	reverseString,
	calculator,
	caesarCipher,
	analyzeArray,
};
