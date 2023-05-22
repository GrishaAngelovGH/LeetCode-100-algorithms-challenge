const { assertEquals } = require('../helpers')

const getSumAbsoluteDifferences = (nums) => {
  const values = []

  for (let i = 0; i < nums.length; i++) {
    const arr = []

    for (let j = 0; j < nums.length; j++) {
      arr.push(Math.abs(nums[i] - nums[j]))
    }

    values.push(arr.reduce((a, b) => a + b))
  }

  return values
}

console.log(
  assertEquals(
    getSumAbsoluteDifferences([2, 3, 5]),
    [4, 3, 5]
  )
)

console.log(
  assertEquals(
    getSumAbsoluteDifferences([1, 4, 6, 8, 10]),
    [24, 15, 13, 15, 21]
  )
)