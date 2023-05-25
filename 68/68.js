const { generateSubarrays } = require('../helpers')

const maxSumMinProduct = (nums) => {
  const subarrays = generateSubarrays(nums)

  const minProducts = subarrays.map(v => {
    const min = Math.min(...v)
    const sum = v.reduce((a, b) => a + b)

    return min * sum
  })

  return Math.max(...minProducts)
}

console.log(maxSumMinProduct([1, 2, 3, 2]) === 14)
console.log(maxSumMinProduct([2, 3, 3, 1, 2]) === 18)
console.log(maxSumMinProduct([3, 1, 5, 6, 4, 2]) === 60)