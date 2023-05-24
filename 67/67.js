const { generateSubarrays } = require('../helpers')

const maxAbsoluteSum = (nums) => {
  const subarrays = generateSubarrays(nums)
  const sums = subarrays.map(v => Math.abs(v.reduce((a, b) => a + b, 0)))

  return Math.max(...sums)
}

console.log(maxAbsoluteSum([1, -3, 2, 3, -4]) === 5)
console.log(maxAbsoluteSum([2, -5, 1, -4, 3, -2]) === 8)