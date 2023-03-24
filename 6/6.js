const maximumGap = nums => {
  if (nums.length < 2) return 0

  const sortedNumbers = nums.sort((a, b) => a - b)
  const diffs = []

  sortedNumbers.forEach((v, i) => {
    const currentNumber = v
    const nextNumber = sortedNumbers[i + 1]

    if (nextNumber) {
      diffs.push(nextNumber - currentNumber)
    }
  })

  return Math.max(...diffs)
}

console.log(maximumGap([3, 6, 9, 1]) === 3)
console.log(maximumGap([10]) === 0)
console.log(maximumGap([3, 15, 6, 9, 1]) === 6)