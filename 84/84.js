const { generateSubarrays } = require('../helpers')

const countSubarrays = (nums, minK, maxK) => {
  const subarrays = generateSubarrays(nums)
  const fixedBoundsSubarrays = subarrays.filter(v => {
    const min = Math.min(...v)
    const max = Math.max(...v)

    return min === minK && max === maxK
  })

  return fixedBoundsSubarrays.length
}

console.log(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5) === 2)
console.log(countSubarrays([1, 1, 1, 1], 1, 1) === 10)