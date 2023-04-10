const { countFrequency } = require('../helpers')

const findDuplicate = (nums) => {
  const freq = countFrequency(nums)

  return Number(Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0])
}

console.log(findDuplicate([1, 3, 4, 2, 2]) === 2)
console.log(findDuplicate([3, 1, 3, 4, 2]) === 3)