const { assertEquals } = require('../helpers')

class TreeNode {
  constructor(value, leftNode, rightNode) {
    this.value = value
    this.leftNode = leftNode
    this.rightNode = rightNode
  }
}

const tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(4))
const tree2 = new TreeNode(1, new TreeNode(0), new TreeNode(3))

const tree3 = new TreeNode(1, null, new TreeNode(8))
const tree4 = new TreeNode(8, new TreeNode(1))

class BinaryTree {
  constructor(root) {
    this.root = root
  }

  breadthFirstSearch() {
    if (!this.root) return

    const values = []
    const queue = []

    queue.push(this.root)

    while (queue.length) {
      const node = queue.shift()

      if (node.leftNode) {
        queue.push(node.leftNode)
      }

      if (node.rightNode) {
        queue.push(node.rightNode)
      }

      values.push(node.value)
    }

    return values
  }
}

const arr1 = [
  ...new BinaryTree(tree1).breadthFirstSearch(),
  ...new BinaryTree(tree2).breadthFirstSearch()
].sort((a, b) => a - b)

console.log(
  assertEquals(arr1, [0, 1, 1, 2, 3, 4])
)

const arr2 = [
  ...new BinaryTree(tree3).breadthFirstSearch(),
  ...new BinaryTree(tree4).breadthFirstSearch()
].sort((a, b) => a - b)

console.log(
  assertEquals(arr2, [1, 1, 8, 8])
)