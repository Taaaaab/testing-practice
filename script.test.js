const capitilize = require('./script');

test('capitilize the first letter', () => {
  expect(capitilize("word")).toBe("Word");
});

const reverseString = require('./reverseString');

test('reverse string input', () => {
  expect(reverseString("jest test")).toBe("tset tsej");
});
