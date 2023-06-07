const { generateSubarrays } = require('../helpers')

const countSubarrays = (nums, k) => {
  const subarrays = generateSubarrays(nums)
  const scores = subarrays.map(arr => arr.reduce((a, b) => a + b) * arr.length)
  return scores.filter(v => v < k).length
}

console.log(countSubarrays([2, 1, 4, 3, 5], 10) === 6)
console.log(countSubarrays([1, 1, 1], 5) === 5)