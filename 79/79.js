const countPairs = (nums, k) => {
  const pairs = []
  let strPairs = ''

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      const pair = [nums[i], nums[j]].sort((a, b) => a - b)

      const isDivisible = (nums[i] * nums[j]) % k === 0

      if (i !== j && isDivisible && !strPairs.includes(pair.toString())) {
        pairs.push(pair)
        strPairs += `${pair} `
      }
    }
  }

  return pairs.length
}

console.log(countPairs([1, 2, 3, 4, 5], 2) === 7)
console.log(countPairs([1, 2, 3, 4], 5) === 0)