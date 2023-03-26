const countDigitOne = n => {
  const arr = new Array(n).fill().map((v, i) => i + 1)
  const ones = arr.join('').match(/1/gi)
  return ones?.length || 0
}

console.log(countDigitOne(13) === 6)
console.log(countDigitOne(0) === 0)
console.log(countDigitOne(48) === 15)