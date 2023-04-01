const { generateSubstrings } = require('../helpers')

const countUniqueChars = str => {
  const freq = {}

  str.split('').forEach(v => {
    if (!freq[v]) {
      freq[v] = 0
    }

    freq[v]++
  })

  return Object.values(freq).filter(v => v === 1).length
}

const uniqueLetterString = s => {
  const substrings = generateSubstrings(s)
  return substrings.reduce((a, b) => a + countUniqueChars(b), 0)
}

console.log(uniqueLetterString('abc') === 10)
console.log(uniqueLetterString('aba') === 8)
console.log(uniqueLetterString('leetcode') === 92)