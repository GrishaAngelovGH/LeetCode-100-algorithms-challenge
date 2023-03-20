const { assertEquals } = require('../helpers')

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const getValuesFrom = list => {
  const values = []
  const queue = []

  queue.push(list)

  while (queue.length) {
    const node = queue.shift()
    values.push(node.val)
    node.next && queue.push(node.next)
  }

  return values
}

const createListFrom = values => {
  const [val, ...rest] = values

  if (!val) return

  return new ListNode(val, createListFrom(rest))
}

const merge_k_lists = lists => {
  if (!lists.length) return []

  const values = []

  lists.forEach(list => {
    values.push(getValuesFrom(list))
  })

  const sortedValues = values.flat().sort((a, b) => a - b)

  return createListFrom(sortedValues)
}

const expected = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5, new ListNode(6))))))))

const lists = [
  new ListNode(1, new ListNode(4, new ListNode(5))),
  new ListNode(1, new ListNode(3, new ListNode(4))),
  new ListNode(2, new ListNode(6))
]

console.log(assertEquals(merge_k_lists(lists), expected))
console.log(assertEquals(merge_k_lists([]), []))