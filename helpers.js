const assertEquals = (actual, expected) => {
  return JSON.stringify(actual) === JSON.stringify(expected)
}

// All possible contiguous combinations of characters from the original string

const generateSubstrings = str => {
  const substrings = []

  for (let i = 0; i <= str.length; i++) {
    for (let j = 0; j <= str.length; j++) {
      const substring = str.slice(i, j)
      substring.length > 0 && substrings.push(substring)
    }
  }

  return substrings
}

// console.log(generateSubstrings('abc'))
// [ 'a', 'ab', 'abc', 'b', 'bc', 'c' ]

module.exports = {
  assertEquals,
  generateSubstrings
}