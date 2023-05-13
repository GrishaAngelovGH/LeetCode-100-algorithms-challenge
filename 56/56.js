const { generateSubstrings } = require('../helpers')

const maxVowels = (s, k) => {
  const substrings = generateSubstrings(s)
  const vowels = 'aeiou'

  const filtered = substrings
    .filter(str => str.length === k)
    .map(str => [...str].filter(v => vowels.includes(v)).length)

  return Math.max(...filtered)
}

console.log(maxVowels('abciiidef', 3) === 3)
console.log(maxVowels('aeiou', 2) === 2)
console.log(maxVowels('leetcode', 3) === 2)