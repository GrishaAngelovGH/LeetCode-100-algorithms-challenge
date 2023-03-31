const findKthNumber = (m, n, k) => {
  const matrix = new Array(m).fill(0).map(() => new Array(n).fill(0))

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      matrix[i - 1][j - 1] = i * j
    }
  }

  return matrix.flat().sort((a, b) => a - b)[k - 1]
}

console.log(findKthNumber(3, 3, 5) === 3)
console.log(findKthNumber(2, 3, 6) === 6)