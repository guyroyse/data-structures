class HashTable {
  constructor() {
    this._data = {}
    this._size = 0
  }

  isEmpty() {
    return this._size === 0
  }

  size() {
    return this._size
  }

  put(key, value) {
    this._data[key] = value
    this._size++
  }

  fetch(key) {
    let value = this._data[key]
    return value === undefined ? null : value
  }

  remove(key) {
    delete this._data[key]
    this._size--
  }
}

module.exports = HashTable
