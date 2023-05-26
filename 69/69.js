const { assertEquals } = require('../helpers')

const minDifference = (nums, queries) => {
  const array = []

  queries.forEach(query => {
    const [l, r] = query
    const arr = nums.slice(l, r + 1)

    const values = []

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (nums[i] !== nums[j]) {

          if (Math.abs(arr[i] - arr[j]) === 0) {
            values.push(-1)
          } else {
            values.push(Math.abs(arr[i] - arr[j]))

          }
        }
      }
    }

    array.push(Math.min(...values))
  })

  return array
}

console.log(
  assertEquals(
    minDifference([1, 3, 4, 8], [[0, 1], [1, 2], [2, 3], [0, 3]]),
    [2, 1, 4, 1]
  )
)

console.log(
  assertEquals(
    minDifference([4, 5, 2, 2, 7, 10], [[2, 3], [0, 2], [0, 5], [3, 5]]),
    [-1, 1, 1, 3]
  )
)