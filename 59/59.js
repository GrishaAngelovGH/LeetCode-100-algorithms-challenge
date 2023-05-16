const { generateSubarrays } = require('../helpers')

const rangeSum = function (nums, left, right) {
  const subarrays = generateSubarrays(nums)
  const sums = subarrays.map(v => v.reduce((a, b) => a + b)).sort((a, b) => a - b)

  return sums.slice(left - 1, right).reduce((a, b) => a + b)
}

console.log(rangeSum([1, 2, 3, 4], 1, 5) === 13)
console.log(rangeSum([1, 2, 3, 4], 3, 4) === 6)
console.log(rangeSum([1, 2, 3, 4], 1, 10) === 50)