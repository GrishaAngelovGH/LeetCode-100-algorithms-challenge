const { generateSubstrings } = require('../helpers')

const countVowels = (word) => {
  const substrings = generateSubstrings(word)
  const vowels = 'aeuio'

  return substrings
    .map(v => [...v].filter(letter => vowels.includes(letter)).length)
    .reduce((a, b) => a + b)
}

console.log(countVowels('aba') === 6)
console.log(countVowels('abc') === 3)
console.log(countVowels('ltcd') === 0)