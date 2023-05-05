const isPrefixOfWord = (sentence, searchWord) => {
  return sentence
    .split(' ')
    .map((v, i) => v.startsWith(searchWord) ? i + 1 : -1)
    .find(v => v > 0) || -1
}

console.log(isPrefixOfWord('i love eating burger', 'burg') === 4)
console.log(isPrefixOfWord('this problem is an easy problem', 'pro') === 2)
console.log(isPrefixOfWord('asd', 'pro') === -1)