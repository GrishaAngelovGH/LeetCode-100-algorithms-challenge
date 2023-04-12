const { generateSubstrings, countFrequency } = require('../helpers')

const longestSubstring = (s, k) => {
  const substrings = generateSubstrings(s)
  const filtered = substrings.filter(v => Object.values(countFrequency(v)).every(v => v >= k))
  return filtered.sort((a, b) => b.length - a.length)[0].length
}

console.log(longestSubstring('aaabb', 3) === 3)
console.log(longestSubstring('ababbc', 2) === 5)