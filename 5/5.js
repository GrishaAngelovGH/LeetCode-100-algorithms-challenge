const { generateSubstrings } = require('../helpers')

const minWindow = (s, t) => {
  const substrings = generateSubstrings(s)
  const uniqueValues = [...new Set(substrings)]

  const filtered = uniqueValues
    .filter(v => [...t].every(letter => v.includes(letter)))
    .sort((a, b) => a.length - b.length)

  return filtered[0] || ''
}

console.log(minWindow('ADOBECODEBANC', 'ABC') === 'BANC')
console.log(minWindow('a', 'qwe') === '')
console.log(minWindow('ADOBECODEBANC', 'BCD') === 'DOBEC')