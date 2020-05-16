const murmur = require('murmurhash')

class BloomFilter {
  constructor({ bitWidth, hashCount }) {
    this.bitArray = new Array(bitWidth).fill(false)
    this.hashArray = new Array(hashCount)
      .fill(Number.MAX_SAFE_INTEGER)
      .map(x => Math.floor(Math.random() * x))
  }

  hasMember(value) {
    return this.makeIndices(value)
      .every(index => this.bitArray[index] === true)
  }

  addMember(value) {
    this.makeIndices(value)
      .forEach(index => this.bitArray[index] = true)
  }

  makeIndices(value) {
    return this.hashArray
      .map(seed => murmur.v3(value, seed) % this.bitArray.length)
  }
}

module.exports = BloomFilter