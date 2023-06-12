const { assertEquals } = require('../helpers')

class FreqStack {
  constructor() {
    this.values = []
  }

  getValues() {
    return this.values
  }

  push(value) {
    this.values.push(value)
  }

  pop() {
    if (!this.values.length) return

    const freq = {}

    this.values.forEach(value => {
      if (!freq[value]) {
        freq[value] = 0
      }

      freq[value]++
    })

    const mostFrequentValue = Number(Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0])

    this.values = this.values.filter(v => v !== mostFrequentValue)

    return mostFrequentValue
  }
}

const stack = new FreqStack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(3)
stack.push(3)
stack.push(3)
stack.push(4)
stack.push(4)
stack.push(5)

console.log(stack.pop() === 3)
console.log(assertEquals(stack.values, [1, 2, 4, 4, 5]))