const containsNearbyAlmostDuplicate = (nums, indexDiff, valueDiff) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      const areNotSame = i != j
      const lessThanIndexDiff = Math.abs(i - j) <= indexDiff
      const lessThanValueDiff = Math.abs(nums[i] - nums[j]) <= valueDiff

      if (areNotSame && lessThanIndexDiff && lessThanValueDiff) {
        return true
      }
    }
  }

  return false
}

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0) === true) // 0, 3
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3) === false)