const { countFrequency } = require('../helpers')

const compress = (chars) => {
  const freq = countFrequency(chars)

  return Object.entries(freq).map(v => v[1] > 1 ? `${v[0]}${v[1]}` : v[0]).join('').length
}

console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']) === 6)
console.log(compress(['a']) === 1)
console.log(compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']) === 4)