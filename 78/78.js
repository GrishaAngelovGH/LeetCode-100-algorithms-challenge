const kthSmallestProduct = (nums1, nums2, k) => {
  const products = []

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      products.push(nums1[i] * nums2[j])
    }
  }

  return products.sort((a, b) => a - b)[k - 1]
}

console.log(kthSmallestProduct([2, 5], [3, 4], 2) === 8)
console.log(kthSmallestProduct([-4, -2, 0, 3], [2, 4], 6) === 0)
console.log(kthSmallestProduct([-2, -1, 0, 1, 2], [-3, -1, 2, 4, 5], 3) === -6)