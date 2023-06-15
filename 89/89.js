const { assertEquals } = require('../helpers')

const groupAnagrams = (strs) => {
  const groups = {}

  strs.forEach(str => {
    const lex = [...str].sort().join('')

    if (!groups[lex]) {
      groups[lex] = []
    }

    groups[lex].push(str)
  })

  return Object.values(groups)
}

console.log(
  assertEquals(
    groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']),
    [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
  )
)

console.log(assertEquals(groupAnagrams(['']), [['']]))
console.log(assertEquals(groupAnagrams(['a']), [['a']]))