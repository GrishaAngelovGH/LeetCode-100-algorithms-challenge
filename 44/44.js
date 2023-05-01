const { assertEquals } = require('../helpers')

const fizzBuzz = (n) => {
  const elements = []

  for (let i = 1; i <= n; i++) {
    const f = i % 3 === 0
    const b = i % 5 === 0

    f ? b ? elements.push('FizzBuzz') : elements.push('Fizz') : b ? elements.push('Buzz') : elements.push(i.toString())
  }

  return elements
}

console.log(assertEquals(
  fizzBuzz(3),
  ['1', '2', 'Fizz']
))

console.log(assertEquals(
  fizzBuzz(5),
  ['1', '2', 'Fizz', '4', 'Buzz']
))

console.log(assertEquals(
  fizzBuzz(15),
  ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']
))