const { generateSubarrays } = require('../helpers')

const numberOfSubarrays = (nums, k) => {
  const subarrays = generateSubarrays(nums)

  return subarrays
    .filter(arr => arr.filter(v => v % 2 !== 0).length === k)
    .length
}

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3) === 2)
console.log(numberOfSubarrays([2, 4, 6], 1) === 0)
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2) === 16)