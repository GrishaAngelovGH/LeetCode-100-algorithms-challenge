const { generateSubstrings } = require('../helpers')

const numSub = (s) => {
  const substrings = generateSubstrings(s)
  return substrings.filter(v => /^1+$/g.test(v)).length
}

console.log(numSub('0110111') === 9)
console.log(numSub('101') === 2)
console.log(numSub('111111') === 21)