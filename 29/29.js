const checkSameDigits = (num1, num2) => {
  return [...num1.toString()].sort().join('') === [...num2.toString()].sort().join('')
}

const nextGreaterElement = (n) => {
  let i = n
  let hasSameDigits = false
  const maxUpperBound = 1000

  while (!hasSameDigits && i < maxUpperBound) {
    i++
    hasSameDigits = checkSameDigits(i, n)
  }

  return i === maxUpperBound ? -1 : i
}

console.log(nextGreaterElement(12) === 21)
console.log(nextGreaterElement(21) === -1)