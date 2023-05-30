const atMostNGivenDigitSet = (digits, n) => {
  const numbers = []

  for (let i = 1; i <= n; i++) {
    const d = [...i.toString()]
    if (d.every(v => digits.includes(v))) {
      numbers.push(i)
    }
  }

  return numbers.length
}

console.log(atMostNGivenDigitSet(['1', '3', '5', '7'], 100) === 20)
console.log(atMostNGivenDigitSet(['1', '3', '5', '7'], 1000) === 84)
console.log(atMostNGivenDigitSet(['1', '3', '5', '7'], 10000) === 340)
console.log(atMostNGivenDigitSet(['7'], 8) === 1)