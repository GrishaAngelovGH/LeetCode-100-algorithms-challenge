const nthMagicalNumber = (n, a, b) => {
  const numbers = []

  let i = 1

  while (numbers.length < n) {
    let isDivisible = false

    while (!isDivisible) {
      i++

      isDivisible = i % a === 0 || i % b === 0
    }

    numbers.push(i)
  }

  return numbers.pop()
}

console.log(nthMagicalNumber(1, 2, 3) === 2)
console.log(nthMagicalNumber(4, 2, 3) === 6)