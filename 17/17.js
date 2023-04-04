const { generateSubstrings, checkPalindrome } = require('../helpers')

const longestPalindrome = (s) => {
  const substrings = generateSubstrings(s)
  return substrings
    .filter(v => checkPalindrome(v))
    .sort((a, b) => b.length - a.length)[0]
}

console.log(longestPalindrome('babad') === 'bab')
console.log(longestPalindrome('cbbd') === 'bb')