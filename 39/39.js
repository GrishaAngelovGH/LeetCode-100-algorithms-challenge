const { generateSubstrings } = require('../helpers')

const queryString = (s, n) => {
  const substrings = generateSubstrings(s)

  const values = []

  for (let i = 1; i <= n; i++) {
    values.push(i.toString(2))
  }

  return values.every(v => substrings.includes(v))
}

console.log(queryString('0110', 3) === true)
console.log(queryString('0110', 4) === false)