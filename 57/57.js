const kthFactor = (n, k) => {
  const factors = []

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i)
    }
  }

  return factors[k - 1] || -1
}

console.log(kthFactor(12, 3) === 3)
console.log(kthFactor(7, 2) === 7)
console.log(kthFactor(4, 4) === -1)