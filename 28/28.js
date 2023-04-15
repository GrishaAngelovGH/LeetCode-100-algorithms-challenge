const findPairs = (nums, k) => {
  const pairs = []
  let strPair = ''

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      const pair = [nums[i], nums[j]].sort((a, b) => a - b)

      if (i !== j && Math.abs(nums[i] - nums[j]) === k && !strPair.includes(`${pair}`)) {
        pairs.push(pair)
        strPair += `${pair} `
      }
    }
  }

  return pairs.length
}

console.log(findPairs([3, 1, 4, 1, 5], 2) === 2)
console.log(findPairs([1, 2, 3, 4, 5], 1) === 4)
console.log(findPairs([1, 3, 1, 5, 4], 0) === 1)