const sumOfFlooredPairs = nums => {
  const pairs = []

  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j <= nums.length; j++) {
      if (nums[i] && nums[j]) {
        pairs.push([nums[i], nums[j]])
      }
    }
  }

  return pairs
    .map(v => Math.floor(v[0] / v[1]))
    .reduce((a, b) => a + b)
}

console.log(sumOfFlooredPairs([2, 5, 9]) === 10)
console.log(sumOfFlooredPairs([7, 7, 7, 7, 7, 7, 7]) === 49)