const { generateSubarrays } = require('../helpers')

const longestSubarray = (nums) => {
  const subarrays = generateSubarrays(nums)
  const arrays = []

  subarrays.forEach(subarr => {
    subarr.forEach((v, i) => {
      const arr = subarr.slice(0, i).concat(subarr.slice(i + 1))

      if (arr.length > 0 && arr.every(v => v === 1)) {
        arrays.push(arr)
      }
    })
  })

  return arrays.sort((a, b) => b.length - a.length)[0]?.length || 0
}

console.log(longestSubarray([1, 1, 0, 1]) === 3)
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]) === 5)
console.log(longestSubarray([1, 1, 1]) === 2)
console.log(longestSubarray([2, 3, 4]) === 0)