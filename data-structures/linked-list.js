class LinkedList {
  constructor() {
    this.firstNode = null
    this.lastNode = null
    this.currentSize = 0
  }

  isEmpty() {
    return this.firstNode === null
  }

  size() {
    return this.currentSize
  }

  append(item) {
    let node = { value: item, next: null }
    if (this.firstNode === null) {
      this.firstNode = node
      node.previous = null
    } else {
      this.lastNode.next = node
      node.previous = this.lastNode
    }
    this.lastNode = node
    this.currentSize++
  }

  first() {
    return this.firstNode
  }

  last() {
    return this.lastNode
  }

  removeFirst() {
    this.currentSize--
    this.firstNode = this.firstNode.next
    this.firstNode.previous = null
  }

  removeLast() {
    this.currentSize--
    this.lastNode = this.lastNode.previous
    this.lastNode.next = null
  }

  getAt(index) {
    if (index >= this.currentSize || index < 0) return null

    let node = this.firstNode;
    for (let i = 0; i < index; i++) {
      node = node.next
    }
    return node
  }

  removeAt(index) {
    let nodeToRemove = this.getAt(index)
    if (nodeToRemove !== null) {

      let prevNode = nodeToRemove.previous
      let nextNode = nodeToRemove.next

      if (prevNode !== null) {
        prevNode.next = nextNode
      } else {
        this.firstNode = nextNode
      }

      if (nextNode !== null) {
        nextNode.previous = prevNode
      } else {
        this.lastNode = prevNode
      }

      this.currentSize--
    }
  }
}

module.exports = LinkedList
