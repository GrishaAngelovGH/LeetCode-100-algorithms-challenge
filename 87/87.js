const { generateSubstrings } = require('../helpers')

const val = letter => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return alphabet.indexOf(letter) + 1
}

const hash = (s, p, m) => {
  return [...s]
    .map((v, i) => val(v) * Math.pow(p, i))
    .reduce((a, b) => a + b) % m
}

const subStrHash = (s, power, modulo, k, hashValue) => {
  const substrings = generateSubstrings(s)
  const uniqueSubstrings = [...new Set(substrings)]

  const hashValues = uniqueSubstrings.map(v => ({ value: v, hash: hash(v, power, modulo) }))
  return hashValues.find(v => v.value.length === k && v.hash === hashValue).value
}

console.log(subStrHash('leetcode', 7, 20, 2, 0) === 'ee')
console.log(subStrHash('fbxzaad', 31, 100, 3, 32) === 'fbx')