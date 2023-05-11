const sumFourDivisors = (nums) => {
  const divisors = []

  nums.forEach(n => {
    const values = []

    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        values.push(i)
      }
    }

    values.length === 4 && divisors.push(values)
  })

  return divisors.map(arr => arr.reduce((a, b) => a + b)).reduce((a, b) => a + b, 0)
}

console.log(sumFourDivisors([21, 4, 7]) === 32)
console.log(sumFourDivisors([21, 21]) === 64)
console.log(sumFourDivisors([1, 2, 3, 4, 5]) === 0)