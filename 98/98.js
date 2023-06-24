const { generateSubstrings } = require('../helpers')

const findTheLongestSubstring = (s) => {
  const substrings = generateSubstrings(s)
  const vowels = 'aeuio'

  return substrings
    .filter(str => {
      return [...vowels].every(vowel => {
        return [...str].filter(v => v === vowel).length % 2 === 0
      })
    })
    .sort((a, b) => b.length - a.length)[0].length
}

console.log(findTheLongestSubstring('eleetminicoworoep') === 13)
console.log(findTheLongestSubstring('leetcodeisgreat') === 5)
console.log(findTheLongestSubstring('bcbcbc') === 6)