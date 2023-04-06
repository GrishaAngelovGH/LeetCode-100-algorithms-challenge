const { generateSubarrays } = require('../helpers')

const maxSubArray = (nums) => {
  const subarrays = generateSubarrays(nums)
  const sums = subarrays.map(v => v.reduce((a, b) => a + b))
  return Math.max(...sums)
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6)
console.log(maxSubArray([1]) === 1)
console.log(maxSubArray([5, 4, -1, 7, 8]) === 23)