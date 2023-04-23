const { generateSubarrays } = require('../helpers')

const sumSubarrayMins = (arr) => {
  const subarrays = generateSubarrays(arr)
  return subarrays.map(v => Math.min(...v)).reduce((a, b) => a + b)
}

console.log(sumSubarrayMins([3, 1, 2, 4]) === 17)
console.log(sumSubarrayMins([11, 81, 94, 43, 3]) === 444)