const findKthNumber = (n, k) => {
  const arr = new Array(n).fill().map((v, i) => `${i + 1}`)

  const numbers = arr.sort().map(Number)

  return numbers[k - 1]
}

console.log(findKthNumber(13, 2) === 10)
console.log(findKthNumber(1, 1) === 1)