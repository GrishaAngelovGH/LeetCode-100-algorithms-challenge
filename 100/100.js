const { generateSubstrings } = require('../helpers')

const getBeauty = str => {
  const freq = {}

  str.split('').forEach(v => {
    if (!freq[v]) {
      freq[v] = 0
    }

    freq[v]++
  })

  const sortedAsc = Object.entries(freq).sort((a, b) => a[1] - b[1])

  if (sortedAsc.length < 2) {
    return 0
  }

  const max = sortedAsc.pop()
  const min = sortedAsc.shift()

  return max[1] - min[1]
}

const beautySum = (s) => {
  const substrings = generateSubstrings(s)

  return substrings.map(v => getBeauty(v)).reduce((a, b) => a + b)
}

console.log(beautySum('aabcb') === 5)
console.log(beautySum('aabcbaa') === 17)