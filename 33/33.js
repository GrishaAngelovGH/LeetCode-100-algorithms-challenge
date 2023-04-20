const { assertEquals, countFrequency } = require('../helpers')

const topKFrequent = (words, k) => {
  const freq = countFrequency(words)

  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1])

  return sorted.map(v => v[0]).slice(0, k)
}

console.log(
  assertEquals(
    topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2),
    ['i', 'love']
  )
)

console.log(
  assertEquals(
    topKFrequent(['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'], 4),
    ['the', 'is', 'sunny', 'day']
  )
)