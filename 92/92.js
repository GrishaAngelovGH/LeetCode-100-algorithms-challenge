const checkNotShareCommonLetters = (w1, w2) => {
  return [...w1].every(v => !w2.includes(v))
}

const maxProduct = (words) => {
  const pairs = []

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j) pairs.push([words[i], words[j]])
    }
  }

  const filteredPairs = pairs.filter(v => checkNotShareCommonLetters(v[0], v[1]))
  const values = filteredPairs.map(v => v[0].length * v[1].length)

  if (!values.length) return values.length

  return Math.max(...values)
}

console.log(maxProduct(['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']) === 16)
console.log(maxProduct(['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd']) === 4)
console.log(maxProduct(['a', 'aa', 'aaa', 'aaaa']) === 0)