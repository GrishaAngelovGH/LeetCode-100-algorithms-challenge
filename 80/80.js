const { generateSubstrings } = require('../helpers')

const appealSum = (s) => {
  const substrings = generateSubstrings(s)
  return substrings
    .map(v => [...new Set(v)].length)
    .reduce((a, b) => a + b)
}

console.log(appealSum('abbca') === 28)
console.log(appealSum('code') === 20)