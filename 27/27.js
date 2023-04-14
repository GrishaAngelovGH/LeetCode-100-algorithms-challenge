const { countFrequency } = require('../helpers')

const frequencySort = (s) => {
  const freq = countFrequency(s)

  return Object.entries(freq).sort((a, b) => b[1] - a[1]).map(v => v[0].repeat(v[1])).join('')
}

console.log(frequencySort('tree') === 'eetr')
console.log(frequencySort('cccaaa') === 'cccaaa')
console.log(frequencySort('Aabb') === 'bbAa')