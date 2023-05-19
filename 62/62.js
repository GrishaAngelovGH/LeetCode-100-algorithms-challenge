const { generateSubarrays } = require('../helpers')

const getMaxLen = (nums) => {
  const subarrays = generateSubarrays(nums)

  return subarrays
    .filter(arr => arr.reduce((a, b) => a * b) > 0)
    .sort((a, b) => b.length - a.length)[0].length
}

console.log(getMaxLen([1, -2, -3, 4]) === 4)
console.log(getMaxLen([0, 1, -2, -3, -4]) === 3)
console.log(getMaxLen([-1, -2, -3, 0, 1]) === 2)