const numIdenticalPairs = (nums) => {
  const pairs = []

  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j <= nums.length; j++) {
      if (i < j && nums[i] === nums[j]) {
        pairs.push([i, j])
      }
    }
  }

  return pairs.length
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]) === 4)
console.log(numIdenticalPairs([1, 1, 1, 1]) === 6)
console.log(numIdenticalPairs([1, 2, 3]) === 0)