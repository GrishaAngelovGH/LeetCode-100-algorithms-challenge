const { generateSubarrays } = require('../helpers')

const subarraySum = (nums, k) => {
  const subarrays = generateSubarrays(nums)

  return subarrays.filter(v => v.reduce((a, b) => a + b) === k).length
}

console.log(subarraySum([1, 1, 1], 2) === 2)
console.log(subarraySum([1, 2, 3], 3) === 2)