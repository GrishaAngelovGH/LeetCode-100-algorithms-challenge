const findMedianSortedArrays = (arr1, arr2) => {
  const arr = [...arr1, ...arr2].sort((a, b) => a - b)
  const isEven = arr.length % 2 === 0
  const middle = Math.floor(arr.length / 2)

  if (isEven) {
    return arr
      .slice(middle - 1, middle + 1)
      .reduce((a, b) => a + b) / 2
  }

  return arr[middle]
}

console.log(findMedianSortedArrays([1, 2], [3, 4]) === 2.5)
console.log(findMedianSortedArrays([1, 3], [2]) === 2)
