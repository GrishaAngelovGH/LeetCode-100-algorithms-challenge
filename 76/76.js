const { generateSubstrings } = require('../helpers')

const lastSubstring = s => {
  const substrings = generateSubstrings(s)
  const uniqueSubstrings = [...new Set(substrings)]

  return uniqueSubstrings.sort().pop()
}

console.log(lastSubstring('abab') === 'bab')
console.log(lastSubstring('leetcode') === 'tcode')