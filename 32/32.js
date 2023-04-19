const repeatedStringMatch = (a, b) => {
  let count = 0

  while (!a.includes(b)) {
    count++
    a = a.repeat(count)
  }

  return count
}

console.log(repeatedStringMatch('abcd', 'cdabcdab') === 3)
console.log(repeatedStringMatch('a', 'aa') === 2)