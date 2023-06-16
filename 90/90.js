const findPeakElement = (nums) => {
  const peakIndexes = []

  nums.forEach((v, i) => {
    const currentElement = v
    const previousElement = nums[i - 1]
    const nextElement = nums[i + 1]

    const hasElements = previousElement && nextElement
    const isPeak = currentElement > previousElement && currentElement > nextElement

    if (hasElements && isPeak) {
      peakIndexes.push(i)
    }
  })

  return peakIndexes.pop()
}

console.log(findPeakElement([1, 2, 3, 1]) === 2)
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]) === 5)