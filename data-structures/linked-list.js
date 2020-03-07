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
    } else {
        this.lastNode.next = node
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
}

module.exports = LinkedList
