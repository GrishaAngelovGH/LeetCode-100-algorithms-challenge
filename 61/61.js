const { generateSubarrays } = require('../helpers')

const numOfSubarrays = (arr) => {
  const subarrays = generateSubarrays(arr)

  return subarrays
    .map(arr => arr.reduce((a, b) => a + b))
    .filter(v => v % 2 !== 0).length
}

console.log(numOfSubarrays([1, 3, 5]) === 4)
console.log(numOfSubarrays([2, 4, 6]) === 0)
console.log(numOfSubarrays([1, 2, 3, 4, 5, 6, 7]) === 16)