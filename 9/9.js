const { assertEquals } = require('../helpers')

const countSmaller = nums => {
  const values = []

  for (let i = 0; i < nums.length; i++) {
    let count = 0

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) count++
    }

    values.push(count)
  }

  return values
}

console.log(assertEquals(countSmaller([5, 2, 6, 1]), [2, 1, 1, 0]))
console.log(assertEquals(countSmaller([-1]), [0]))
console.log(assertEquals(countSmaller([-1, -1]), [0, 0]))