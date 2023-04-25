const { generateSubarrays } = require('../helpers')

const subarraysDivByK = (nums, k) => {
  const subarrays = generateSubarrays(nums)

  return subarrays.filter(v => v.reduce((a, b) => a + b) % k === 0).length
}

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5) === 7)
console.log(subarraysDivByK([5], 9) === 0)