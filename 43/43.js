const isAnagram = (s, t) => {
  const str1 = [...s.toLowerCase()].sort().join('')
  const str2 = [...t.toLowerCase()].sort().join('')

  return str1 === str2
}

console.log(isAnagram('anagram', 'nagaram') === true)
console.log(isAnagram('rat', 'car') === false)