const LinkedList = require('./linked-list')
const murmur = require('murmurhash')

class HashTable {
  constructor(capacity = 128) {
    this._seed = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
    this._capacity = capacity
    this._data = new Array(this._capacity).fill().map(() => new LinkedList())
    this._size = 0
  }

  isEmpty() {
    return this._size === 0
  }

  size() {
    return this._size
  }

  put(key, value) {
    let list = this.findList(key)
    let node = this.findNodeInList(list, key)

    if (node === null) {
      list.append({ key, value })
      this._size++
    } else {
      node.value.value = value
    }
  }

  fetch(key) {
    let list = this.findList(key)
    let node = this.findNodeInList(list, key)

    return node === null ? null : node.value.value
  }

  remove(key) {
    let list = this.findList(key)
    let node = this.findNodeInList(list, key)

    list.removeNode(node)
    this._size--
  }

  findList(key) {
    let index = murmur.v3(key, this._seed) % this._capacity
    return this._data[index]
  }

  findNodeInList(list, key) {
    let node = list.first()
    while (node !== null) {
      if (node.value.key === key) return node
      node = node.next
    }
    return null
  }
}

module.exports = HashTable
