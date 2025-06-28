const sum = require('./sum');

test('Suma 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Suma 5 + 5 = 10', () => {
  expect(sum(5, 5)).toBe(10);
});
