const shift = (letter, i) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const index = (alphabet.indexOf(letter) + i) % alphabet.length
  return alphabet[index]
}

const shiftingLetters = (s, shifts) => {
  shifts.forEach((v, i) => {
    const start = s.slice(0, i + 1)
    const rest = s.slice(i + 1)

    s = [...start].map(letter => shift(letter, v)).join('') + rest
  })

  return s
}

console.log(shiftingLetters('abc', [3, 5, 9]) === 'rpl')
console.log(shiftingLetters('aaa', [1, 2, 3]) === 'gfd')