const { generateSubarrays } = require('../helpers')

const subarraysWithKDistinct = (nums, k) => {
  const subarrays = generateSubarrays(nums)
  return subarrays.filter(v => [...new Set(v)].length === k).length
}

console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2) === 7)
console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3) === 3)