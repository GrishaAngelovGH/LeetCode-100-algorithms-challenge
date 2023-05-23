const tupleSameProduct = (nums) => {
  const tuples = []

  for (let a = 0; a < nums.length; a++) {
    for (let b = 0; b < nums.length; b++) {
      for (let c = 0; c < nums.length; c++) {
        for (let d = 0; d < nums.length; d++) {
          if (
            nums[a] !== nums[b] &&
            nums[b] !== nums[c] &&
            nums[a] !== nums[c] &&
            nums[c] !== nums[d] &&
            nums[a] * nums[b] === nums[c] * nums[d]
          ) {
            tuples.push([nums[a], nums[b], nums[c], nums[d]])
          }
        }
      }
    }
  }

  return tuples.length
}

console.log(tupleSameProduct([2, 3, 4, 6]) === 8)
console.log(tupleSameProduct([1, 2, 4, 5, 10]) === 16)