class LinkedList {
  constructor() {
    this.firstNode = null
    this.lastNode = null
  }

  isEmpty() {
    return this.firstNode === null
  }

  size() {
    return this.firstNode === null ? 0 : 1
  }

  append(item) {
    let node = { value: item, next: null }
    if (this.firstNode === null) {
        this.firstNode = node
    } else {
        this.lastNode.next = node
    }
    this.lastNode = node
  }

  first() {
    return this.firstNode
  }
}

module.exports = LinkedList
