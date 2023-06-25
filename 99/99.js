const reverse = str => [...str].reverse().join('')

const invert = str => [...str].map(v => v === '0' ? '1' : '0').join('')

const findKthBit = (n, k) => {
  let str = '0'

  for (let i = 1; i < n; i++) {
    str += '1' + reverse(invert(str))
  }

  return str[k - 1]
}

console.log((findKthBit(3, 1)) === '0')
console.log((findKthBit(4, 11)) === '1')