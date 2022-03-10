import formatMoney from './formatMoney'

test('converts 0 to $0', () => {
  expect(formatMoney(0)).toBe('$0');
});

test('converts 24 to $24', () => {
  expect(formatMoney(24)).toBe('$24');
});

test('converts 23,675 to $23,675', () => {
  expect(formatMoney(23675)).toBe('$23,675');
});
