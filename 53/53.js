const { generateSubstrings } = require('../helpers')

const numberOfSubstrings = (s) => {
  const substrings = generateSubstrings(s)

  return substrings.filter(v => ['a', 'b', 'c'].every(letter => v.includes(letter))).length
}

console.log(numberOfSubstrings('abcabc') === 10)
console.log(numberOfSubstrings('aaacb') === 3)
console.log(numberOfSubstrings('abc') === 1)