const arrangeWords = (text) => {
  const words = text.toLowerCase().split(' ')

  return words
    .sort((a, b) => a.length - b.length)
    .map((v, i) => i === 0 ? v[0].toUpperCase() + v.slice(1) : v)
    .join(' ')
}

console.log(arrangeWords('Leetcode is cool') === 'Is cool leetcode')
console.log(arrangeWords('Keep calm and code on') === 'On and keep calm code')
console.log(arrangeWords('To be or not to be') === 'To be or to be not')