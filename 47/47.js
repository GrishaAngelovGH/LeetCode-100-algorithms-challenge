const findNumbers = (nums) => {
  return nums.filter(v => v.toString().length % 2 === 0).length
}

console.log(findNumbers([12, 345, 2, 6, 7896]) === 2)
console.log(findNumbers([555, 901, 482, 1771]) === 1)