const assertEquals = (actual, expected) => {
  return JSON.stringify(actual) === JSON.stringify(expected)
}

// All possible contiguous combinations of characters from the original string

const generateSubstrings = str => {
  const substrings = []

  for (let i = 0; i <= str.length; i++) {
    for (let j = 0; j <= str.length; j++) {
      const substring = str.slice(i, j)
      substring.length > 0 && substrings.push(substring)
    }
  }

  return substrings
}

// console.log(generateSubstrings('abc'))
// [ 'a', 'ab', 'abc', 'b', 'bc', 'c' ]

// All possible contiguous combinations of elements from the original array

const generateSubarrays = arr => {
  const subArrays = []

  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      const subArr = arr.slice(i, j)
      subArr.length > 0 && subArrays.push(subArr)
    }
  }

  return subArrays
}

// console.log(generateSubarrays(['a', 'b', 'c']))
// [[ 'a' ],[ 'a', 'b' ],[ 'a', 'b', 'c' ],[ 'b' ],[ 'b', 'c' ],[ 'c' ]]

// console.log(generateSubarrays([1, 2, 3]))
// [ [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 2 ], [ 2, 3 ], [ 3 ] ]

// Note: The rules for denoting a subarray are the same as that of a substring 
// The only difference is that subarrays are used in the context of arrays
// and substring in the context of strings. 

const checkPalindrome = str => [...str].reverse().join('') === str

const countFrequency = str => {
  const freq = {}

  str.split('').forEach(v => {
    if (!freq[v]) {
      freq[v] = 0
    }

    freq[v]++
  })

  return freq
}

module.exports = {
  assertEquals,
  generateSubstrings,
  generateSubarrays,
  checkPalindrome,
  countFrequency
}