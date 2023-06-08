const { generateSubarrays } = require('../helpers')

const validSubarraySize = (nums, threshold) => {
  const subarrays = generateSubarrays(nums)
  return subarrays.find(arr => arr.every(v => {
    return v > Math.floor(threshold / arr.length)
  }))?.length || -1
}

console.log(validSubarraySize([1, 3, 4, 3, 1], 6) === 3)
console.log(validSubarraySize([1, 1, 1, 1, 1], 6) === -1)
console.log(validSubarraySize([6, 5, 6, 5, 8], 7) === 2)