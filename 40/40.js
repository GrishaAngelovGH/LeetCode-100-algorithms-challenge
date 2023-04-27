const maxAbsValExpr = (arr1, arr2) => {
  const values = []

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      const a = Math.abs(arr1[i] - arr1[j])
      const b = Math.abs(arr2[i] - arr2[j])
      const c = Math.abs(i - j)
      values.push(a + b + c)
    }
  }

  return Math.max(...values)
}

console.log(maxAbsValExpr([1, 2, 3, 4], [-1, 4, 5, 6]) === 13)
console.log(maxAbsValExpr([1, -2, -5, 0, 10], [0, -2, -1, -7, -4]) === 20)