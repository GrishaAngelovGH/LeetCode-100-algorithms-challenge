const { assertEquals, checkPalindrome } = require('../helpers')

const palindromePairs = words => {
  const pairs = []

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && checkPalindrome(`${words[i]}${words[j]}`)) {
        pairs.push([i, j])
      }
    }
  }

  return pairs
}

console.log(
  assertEquals(
    palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll']),
    [[0, 1], [1, 0], [2, 4], [3, 2]]
  )
)

console.log(
  assertEquals(
    palindromePairs(['bat', 'tab', 'cat']),
    [[0, 1], [1, 0]]
  )
)

console.log(
  assertEquals(
    palindromePairs(['a', '']),
    [[0, 1], [1, 0]]
  )
)