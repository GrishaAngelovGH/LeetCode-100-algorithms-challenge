const threeSumMulti = (arr, target) => {
  const tuples = []

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (i < j && j < k && arr[i] + arr[j] + arr[k] === target) {
          tuples.push([arr[i], arr[j], arr[k]])
        }
      }
    }
  }

  return tuples.length
}

console.log(threeSumMulti([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8) === 20)
console.log(threeSumMulti([1, 1, 2, 2, 2, 2], 5) === 12)
console.log(threeSumMulti([2, 1, 3], 6) === 1)