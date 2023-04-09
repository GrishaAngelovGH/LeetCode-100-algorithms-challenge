const { assertEquals } = require('../helpers')

const rotate = (nums, k) => {
  let arr = [...nums]

  for (let i = 0; i < k; i++) {
    arr = [arr[arr.length - 1], ...arr.slice(0, arr.length - 1)]
  }

  return arr
}

console.log(
  assertEquals(
    rotate([1, 2, 3, 4, 5, 6, 7], 3),
    [5, 6, 7, 1, 2, 3, 4]
  )
)

console.log(
  assertEquals(
    rotate([-1, -100, 3, 99], 2),
    [3, 99, -1, -100]
  )
)