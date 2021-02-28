// Take in a number and return it formatted as money
export default function formatMoney(number: number) {
  return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
}
