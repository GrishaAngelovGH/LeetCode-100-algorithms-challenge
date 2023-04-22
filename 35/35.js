const decodeAtIndex = (s, k) => {
  let decodedStr = ''

  s.split('').forEach(v => {
    const isNumber = !isNaN(v)

    if (!isNumber) {
      decodedStr += v
    }

    if (isNumber) {
      decodedStr = decodedStr.repeat(parseInt(v))
    }
  })

  return decodedStr[k - 1]
}

console.log(decodeAtIndex('leet2code3', 10) === 'o')
console.log(decodeAtIndex('ha22', 5) === 'h')