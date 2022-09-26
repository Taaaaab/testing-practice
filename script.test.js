const capitilize = require('./script');

test('Capitilize function test', () => {
  expect(capitilize('word')).toBe('Word');
});