const getPair = (nums, k) => {
  let pair = []

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === k) {
        pair = [nums[i], nums[j]]
      }
    }
  }

  return pair
}

const maxOperations = (nums, k) => {
  let count = 0
  let pair = getPair(nums, k)

  while (pair.length > 0) {
    count++
    nums = nums.filter(v => v !== pair[0] && v !== pair[1])
    pair = getPair(nums, k)
  }

  return count
}

console.log(maxOperations([1, 2, 3, 4], 5) === 2)
console.log(maxOperations([3, 1, 3, 4, 3], 6) === 1)