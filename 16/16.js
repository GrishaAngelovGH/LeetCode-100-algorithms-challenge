const { generateSubstrings, countFrequency } = require('../helpers')

const checkNotRepeatedCharacters = str => {
  const freq = countFrequency(str)
  return Object.values(freq).every(v => v === 1)
}

const lengthOfLongestSubstring = (s) => {
  const substrings = generateSubstrings(s)
  const filteredSubstrings = substrings.filter(v => checkNotRepeatedCharacters(v))
  return filteredSubstrings.sort((a, b) => b.length - a.length)[0].length
}

console.log(lengthOfLongestSubstring('abcabcbb') === 3)
console.log(lengthOfLongestSubstring('bbbbb') === 1)
console.log(lengthOfLongestSubstring('pwwkew') === 3)