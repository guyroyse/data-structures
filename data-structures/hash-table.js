const LinkedList = require('./linked-list')
const murmur = require('murmurhash')

const MURMUR_SEED = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
const CAPACITY = 128

class HashTable {
  constructor() {
    this._data = new Array(CAPACITY).fill().map(() => new LinkedList())
    this._size = 0
  }

  isEmpty() {
    return this._size === 0
  }

  size() {
    return this._size
  }

  put(key, value) {
    let hash = murmur.v3(key, MURMUR_SEED)
    let index = hash % CAPACITY
    let list = this._data[index]

    let node = this.findNodeInList(list, key)
    if (node === null) {
      list.append({ key, value })
      this._size++
    } else {
      node.value.value = value
    }
  }

  fetch(key) {
    let hash = murmur.v3(key, MURMUR_SEED)
    let index = hash % CAPACITY
    let list = this._data[index]

    let node = this.findNodeInList(list, key)
    return node === null ? null : node.value.value
  }

  findNodeInList(list, key) {
    let node = list.first()
    while (node !== null) {
      if (node.value.key === key) return node
      node = node.next
    }
    return null
  }

  remove(key) {
    let hash = murmur.v3(key, MURMUR_SEED)
    let index = hash % CAPACITY
    let list = this._data[index]

    let node = this.findNodeInList(list, key)
    list.removeNode(node)
    this._size--
  }
}

module.exports = HashTable
