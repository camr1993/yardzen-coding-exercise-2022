// Take in a budget (saved a string of numbers and commas)
export default function convertBudgetToNum(string: string) {
  return Number(string.replace(/[,]/g, ''))
}
