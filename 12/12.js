const { checkPalindrome } = require('../helpers')

const findPalindrome = (num, checkAbove = true) => {
  let isPalindrome = false
  let count = 0

  while (!isPalindrome) {
    checkAbove ? num++ : num--
    count++

    isPalindrome = checkPalindrome(`${num}`)
  }

  return [count, `${num}`]
}

const nearestPalindromic = n => {
  let num = parseInt(n)

  const [countAbove, palindrome1] = findPalindrome(num)
  const [countBelow, palindrome2] = findPalindrome(num, false)

  return countAbove > countBelow ? palindrome2 : palindrome1
}

console.log(nearestPalindromic('123') === '121')
console.log(nearestPalindromic('164') === '161')