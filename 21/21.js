const { generateSubarrays } = require('../helpers')

const maxProduct = (nums) => {
  const subarrays = generateSubarrays(nums)
  const products = subarrays.map(v => v.reduce((a, b) => a * b))
  return Math.max(...products)
}

console.log(maxProduct([2, 3, -2, 4]) === 6)
console.log(maxProduct([-2, 0, -1]) === 0)