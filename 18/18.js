const { assertEquals } = require('../helpers')

const threeSum = (nums) => {
  const triplets = []
  let strTriplets = ''

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        const triplet = [nums[i], nums[j], nums[k]]

        if (
          i !== j &&
          i !== k &&
          j !== k &&
          nums[i] + nums[j] + nums[k] === 0 &&
          !strTriplets.includes(triplet.sort((a, b) => a - b).toString())
        ) {
          triplets.push(triplet)
          strTriplets += `${triplet} `
        }
      }
    }
  }

  return triplets
}

console.log(
  assertEquals(
    threeSum([-1, 0, 1, 2, -1, -4]),
    [[-1, 0, 1], [-1, -1, 2]]
  )
)

console.log(assertEquals(threeSum([0, 1, 1]), []))
console.log(assertEquals(threeSum([0, 0, 0]), [[0, 0, 0]]))