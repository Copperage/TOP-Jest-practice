const {
	capitalize,
	reverseString,
	calculator,
	caesarCipher,
	analyzeArray,
} = require('./example-tests');

test('capitalize the first letter', () => {
	expect(capitalize('hello')).toBe('Hello');
	expect(capitalize('goodbye')).toBe('Goodbye');
	expect(capitalize('code')).toBe('Code');
});

test('reverse a string', () => {
	expect(reverseString('hello')).toBe('olleh');
	expect(reverseString('goodbye')).toBe('eybdoog');
	expect(reverseString('code')).toBe('edoc');
});

test('calculator functions', () => {
	const calculator = {
		add: (a, b) => a + b,
		subract: (a, b) => a - b,
		divide: (a, b) => a / b,
		multiply: (a, b) => a * b,
	};

	expect(calculator.add(1, 2)).toBe(3);
	expect(calculator.subract(1, 2)).toBe(-1);
	expect(calculator.divide(1, 2)).toBe(0.5);
	expect(calculator.multiply(1, 2)).toBe(2);
});

test('caesar cipher a string', () => {
	expect(caesarCipher('Hello', 3)).toBe('Khoor');
	expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Analyze an array so that it returns an object with the average, min, max, length', () => {
	const array = [1, 8, 3, 4, 2, 6];

	expect(analyzeArray(array)).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});
