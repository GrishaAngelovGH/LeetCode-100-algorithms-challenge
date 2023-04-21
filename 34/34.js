const { generateSubarrays } = require('../helpers')

const numSubarrayBoundedMax = (nums, left, right) => {
  const subarrays = generateSubarrays(nums)

  return subarrays.filter(v => {
    const max = Math.max(...v)
    return left <= max && max <= right
  }).length
}

console.log(numSubarrayBoundedMax([2, 1, 4, 3], 2, 3) === 3)
console.log(numSubarrayBoundedMax([2, 9, 2, 5, 6], 2, 8) === 7)