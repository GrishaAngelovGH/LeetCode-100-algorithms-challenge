const allNumbersArePresent = arr => {
  const start = 1
  const end = arr[arr.length - 1]

  const elements = []

  for (let i = start; i <= end; i++) {
    elements.push(i)
  }

  return elements.every(v => arr.includes(v))
}

const provideSmallestMissingPositive = arr => {
  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i]
    const nextNum = arr[i + 1]

    // in case of two sequential numbers i.e. diff is always 1
    if (nextNum && nextNum - currentNum === 1) continue

    return currentNum + 1
    // return nextNum - 1
  }
}

const firstMissingPositive = nums => {
  if (!nums.length) return

  const sortedPositiveNums = nums.filter(v => v > 0).sort((a, b) => a - b)

  // in case of [1, 2, 3, 4] -> 5
  if (allNumbersArePresent(sortedPositiveNums)) {
    const lastNum = sortedPositiveNums.pop()
    return lastNum + 1
  }

  return provideSmallestMissingPositive(sortedPositiveNums)
}

console.log(firstMissingPositive([1, 2, 0]) === 3)
console.log(firstMissingPositive([1, 2, 0, -1, 3, 4, 5, 6, 7]) === 8)
console.log(firstMissingPositive([1, 2, 0, -5, -6, 3, 4]) === 5)
console.log(firstMissingPositive([3, 4, -1, 1]) === 2)
console.log(firstMissingPositive([3, 4, -1, -5, 1, 2, 6]) === 5)