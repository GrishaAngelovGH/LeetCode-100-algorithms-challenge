const { assertEquals } = require('../helpers')

const sortArrayByParity = (nums) => {
  const even = nums.filter(v => v % 2 === 0)
  const odd = nums.filter(v => v % 2 !== 0)

  return [...even, ...odd]
}

console.log(
  assertEquals(
    sortArrayByParity([3, 1, 2, 4]),
    [2, 4, 3, 1]
  )
)

console.log(
  assertEquals(
    sortArrayByParity([0]),
    [0]
  )
)