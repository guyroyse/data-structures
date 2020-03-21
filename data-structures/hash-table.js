let LinkedList = require('./linked-list')

class HashTable {
  constructor() {
    this._data = new LinkedList()
    this._size = 0
  }

  isEmpty() {
    return this._size === 0
  }

  size() {
    return this._size
  }

  put(key, value) {
    this._data.append({ key, value })
    this._size++
  }

  fetch(key) {
    let node = this.findNode(key)
    return node === null ? null : node.value.value
  }

  findNode(key) {
    let node = this._data.first()
    while (node !== null) {
      if (node.value.key === key) return node
      node = node.next
    }
    return null
  }

  remove(key) {
    let node = this.findNode(key)
    this._data.removeNode(node)
    this._size--
  }
}

module.exports = HashTable
