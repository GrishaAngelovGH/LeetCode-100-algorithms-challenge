const { generateSubarrays } = require('../helpers')

const consecutiveNumbersSum = n => {
  const arr = new Array(n).fill().map((v, i) => i + 1)
  const subarrays = generateSubarrays(arr)

  let count = 0

  subarrays.forEach(v => {
    if (v.reduce((a, b) => a + b) === n) count++
  })

  return count
}

console.log(consecutiveNumbersSum(5) === 2)
console.log(consecutiveNumbersSum(9) === 3)
console.log(consecutiveNumbersSum(15) === 4)