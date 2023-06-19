const { assertEquals } = require('../helpers')

const kSmallestPairs = (nums1, nums2, k) => {
  const pairs = []

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      pairs.push([nums1[i], nums2[j]])
    }
  }

  const values = []

  pairs.forEach(pair => {
    const sum = pair.reduce((a, b) => a + b)
    values.push({ sum, pair })
  })

  const sortedValues = values.sort((a, b) => a.sum - b.sum)

  return sortedValues.map(v => v.pair).slice(0, k)
}

console.log(
  assertEquals(
    kSmallestPairs([1, 7, 11], [2, 4, 6], 3),
    [[1, 2], [1, 4], [1, 6]]
  )
)

console.log(
  assertEquals(
    kSmallestPairs([1, 1, 2], [1, 2, 3], 2),
    [[1, 1], [1, 1]]
  )
)

console.log(
  assertEquals(
    kSmallestPairs([1, 2], [3], 3),
    [[1, 3], [2, 3]]
  )
)