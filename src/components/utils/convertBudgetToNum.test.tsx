import convertBudgetToNum from './convertBudgetToNum'

test('converts 0 from string to num', () => {
  expect(convertBudgetToNum('0')).toBe(0);
});

test('converts 20 from string to num', () => {
  expect(convertBudgetToNum('20')).toBe(20);
});

test('converts 30,000 from string to num', () => {
  expect(convertBudgetToNum('30,000')).toBe(30000);
});

test('converts 256,748 from string to num', () => {
  expect(convertBudgetToNum('256,748')).toBe(256748);
});
