const countOperationsToEmptyArray = (nums) => {
  let count = 0
  let arr = [...nums]

  while (arr.length) {
    const currentElement = arr[0]
    const minElement = Math.min(...arr)

    if (currentElement === minElement) {
      arr = arr.slice(1)
    } else {
      arr = [...arr.slice(1, arr.length), currentElement]
    }

    count++
  }

  return count
}

console.log(countOperationsToEmptyArray([3, 4, -1]) === 5)
console.log(countOperationsToEmptyArray([1, 2, 4, 3]) === 5)
console.log(countOperationsToEmptyArray([1, 2, 3]) === 3)