const isPalindrome = (s) => {
  const normalizedStr = s.trim().toLowerCase().replace(/[^a-z]/gi, '')

  return [...normalizedStr].reverse().join('') === normalizedStr
}

console.log(isPalindrome('A man, a plan, a canal: Panama') === true)
console.log(isPalindrome('race a car') === false)
console.log(isPalindrome(' ') === true)