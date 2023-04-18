const { generateSubstrings, checkPalindrome } = require('../helpers')

const countSubstrings = (s) => {
  const substrings = generateSubstrings(s)

  return substrings.filter(v => checkPalindrome(v)).length
}

console.log(countSubstrings('abc') === 3)
console.log(countSubstrings('aaa') === 6)