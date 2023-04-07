const singleNumber = (nums) => {
  return nums.filter(v => nums.indexOf(v) === nums.lastIndexOf(v))[0]
}

console.log(singleNumber([2, 2, 3, 2]) === 3)
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]) === 99)