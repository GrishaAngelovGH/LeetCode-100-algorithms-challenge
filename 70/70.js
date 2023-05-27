const numOfPairs = (nums, target) => {
  const pairs = []

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        pairs.push([nums[i], nums[j]])
      }
    }
  }

  return pairs.length
}

console.log(numOfPairs(['777', '7', '77', '77'], '7777') === 4)
console.log(numOfPairs(['123', '4', '12', '34'], '1234') === 2)
console.log(numOfPairs(['1', '1', '1'], '11') === 6)