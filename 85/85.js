const { assertEquals } = require('../helpers')

const secondGreaterElement = (nums) => {
  const elements = []

  for (let i = 0; i < nums.length; i++) {
    let count = 0

    for (let j = 0; j < nums.length; j++) {
      if (j > i && nums[j] > nums[i]) count++

      if (count === 2) {
        elements.push(nums[j])
      }
    }

    if (count === 0) elements.push(-1)
  }

  return elements
}

console.log(
  assertEquals(
    secondGreaterElement([2, 4, 0, 9, 6]),
    [9, 6, 6, -1, -1]
  )
)

console.log(
  assertEquals(
    secondGreaterElement([3, 3]),
    [-1, -1]
  )
)