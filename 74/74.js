const { checkPalindrome } = require('../helpers')

const superpalindromesInRange = (left, right) => {
  const start = parseInt(left)
  const end = parseInt(right)

  const elements = []

  for (let i = start; i < end; i++) {
    if (checkPalindrome(i.toString()) && checkPalindrome((Math.sqrt(i).toString()).toString())) {
      elements.push(i)
    }
  }

  return elements.length
}

console.log(superpalindromesInRange('4', '1000') === 4)
console.log(superpalindromesInRange('1', '2') === 1)
console.log(superpalindromesInRange('5', '20000') === 6)