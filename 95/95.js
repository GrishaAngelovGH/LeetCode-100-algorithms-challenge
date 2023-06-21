const { assertEquals } = require('../helpers')

const sumEvenAfterQueries = (nums, queries) => {
  const values = []

  queries.forEach(query => {
    const [val, index] = query
    nums[index] = nums[index] + val

    const sum = nums.filter(v => v % 2 === 0).reduce((a, b) => a + b, 0)
    values.push(sum)
  })

  return values
}

console.log(
  assertEquals(
    sumEvenAfterQueries([1, 2, 3, 4], [[1, 0], [-3, 1], [-4, 0], [2, 3]]),
    [8, 6, 2, 4]
  )
)

console.log(
  assertEquals(
    sumEvenAfterQueries([1], [[4, 0]]),
    [0]
  )
)