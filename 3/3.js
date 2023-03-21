const { generateSubstrings } = require('../helpers')

const isValidParentheses = str => {
  let count = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') count++
    if (str[i] === ')') count--

    if (count < 0) return false
  }

  return count === 0
}

const longestValidParentheses = str => {
  if (!str.length) return str.length

  const substrings = generateSubstrings(str)
  const uniqueSubstrings = [...new Set(substrings)]
  const validParentheses = uniqueSubstrings.filter(v => isValidParentheses(v))
  return validParentheses.sort((a, b) => b.length - a.length)[0].length
}

console.log(longestValidParentheses('(()') === 2) // ()
console.log(longestValidParentheses(')()())') === 4) // ()()
console.log(longestValidParentheses('') === 0)