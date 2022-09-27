const capitilize = require('./script');

test('capitilize the first letter', () => {
  expect(capitilize("word")).toBe("Word");
});

const reverseString = require('./reverseString');

test('reverse string input', () => {
  expect(reverseString("jest test")).toBe("tset tsej");
});

const calculator = require('./calculator');

test('basic calculator function', () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.sub(2, 2)).toBe(0);
  expect(calculator.mul(6, 2)).toBe(12);
  expect(calculator.div(24, 6)).toBe(4);
});

const caesarCipher = require('./caesar');

test('should shift each character to next character', () => {
  expect(caesarCipher('attack at dawn')).toBe('buubdl!bu!ebxo');
});

const analyzeArray = require('./analyzeArray');

test('take array and return object with average, min, max & length', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});
