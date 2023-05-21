const concatenatedBinary = (n) => {
  let num = ''

  for (let i = 1; i <= n; i++) {
    num += i.toString(2)
  }

  return parseInt(num, 2)
}

console.log(concatenatedBinary(1) === 1)
console.log(concatenatedBinary(3) === 27)
console.log(concatenatedBinary(12) === 118505380540)