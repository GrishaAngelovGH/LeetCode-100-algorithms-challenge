const { countFrequency } = require('../helpers')

const isSpecialNumber = n => {
  const freq = countFrequency(n.toString())

  return Object.values(freq).every(v => v === 1)
}

const countSpecialNumbers = (n) => {
  const values = []

  for (let i = 1; i <= n; i++) {
    if (isSpecialNumber(i)) values.push(i)
  }

  return values.length
}

console.log(countSpecialNumbers(20) === 19)
console.log(countSpecialNumbers(5) === 5)
console.log(countSpecialNumbers(135) === 110)