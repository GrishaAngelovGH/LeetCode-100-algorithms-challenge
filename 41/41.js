const addBinary = (a, b) => {
  const num1 = parseInt(a, 2)
  const num2 = parseInt(b, 2)

  return (num1 + num2).toString(2)
}

console.log(addBinary('11', '1') === '100')
console.log(addBinary('1010', '1011') === '10101')