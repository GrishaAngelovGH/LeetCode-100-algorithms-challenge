const { assertEquals } = require('../helpers')

const lexicalOrder = (n) => {
  const arr = new Array(n).fill().map((v, i) => `${i + 1}`)

  return arr.sort().map(Number)
}

console.log(
  assertEquals(
    lexicalOrder(13),
    [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]
  )
)

console.log(
  assertEquals(
    lexicalOrder(2),
    [1, 2]
  )
)