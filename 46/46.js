const subtractProductAndSum = (n) => {
  const digits = [...n.toString()].map(Number)

  const product = digits.reduce((a, b) => a * b)
  const sum = digits.reduce((a, b) => a + b)

  return product - sum
}

console.log(subtractProductAndSum(234) === 15)
console.log(subtractProductAndSum(4421) === 21)