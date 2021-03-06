const chai = require('chai')
const expect = chai.expect

const HashTable = require('../data-structures').HashTable

describe("HashTable", function() {

  let subject

  context("when created", function() {

    beforeEach(function() {
      subject = new HashTable(16)
    })

    it("is empty", function() {
      expect(subject.isEmpty()).to.be.true
    })

    it("has nothing to be retrieved", function() {
      expect(subject.fetch("Master")).to.be.null
    })

    it("has a size of 0", function() {
      expect(subject.size()).to.equal(0)
    })

    context("when an item is added to the hash", function() {
      beforeEach(function() {
        subject.put("Master", "Chief")
      })

      it("is no longer empty", function() {
        expect(subject.isEmpty()).to.be.false
      })

      it("can be retrieved", function() {
        expect(subject.fetch("Master")).to.equal("Chief")
      })

      it("has a size of 1", function() {
        expect(subject.size()).to.equal(1)
      })

      context("when we reuse a key", function() {

        beforeEach(function() {
          subject.put("Master", "Sword")
        })
  
        it("still has a size of 1", function() {
          expect(subject.size()).to.equal(1)
        })

        it("has the new value", function() {
          expect(subject.fetch("Master")).to.equal("Sword")
        })
      })

      context("when another item is added to the hash", function() {
        beforeEach(function() {
          subject.put("Mario", "Mario")
        })

        it("can retrieve the first item", function() {
          expect(subject.fetch("Master")).to.equal("Chief")
        })

        it("can retrieve the second item", function() {
          expect(subject.fetch("Mario")).to.equal("Mario")
        })

        it("has a size of 2", function() {
          expect(subject.size()).to.equal(2)
        })

        context("when that item is removed", function() {
          beforeEach(function() {
            subject.remove("Mario")
          })

          it("has a size of 1", function() {
            expect(subject.size()).to.equal(1)
          })

          it("can still retrieve the first item", function() {
            expect(subject.fetch("Master")).to.equal("Chief")
          })

          it("can not retrieve the removed item", function() {
            expect(subject.fetch("Mario")).to.be.null
          })
        })
      })

      context("when an item is removed", function() {
        beforeEach(function() {
          subject.remove("Master")
        })

        it("is empty", function() {
          expect(subject.isEmpty()).to.be.true
        })
        
        it("has nothing to be retrieved", function() {
          expect(subject.fetch("Master")).to.be.null
        })
    
        it("has a size of 0", function() {
          expect(subject.size()).to.equal(0)
        })
      })
    })

    context("when a lot of things are added", function() {
      beforeEach(function() {
        for (let i = 0; i < 500; i++) {
          subject.put(`key ${i}`, `value ${i * 10}`)
        }
      })

      it("has a size of 500", function() {
        expect(subject.size()).to.equal(500)
      })

      it("can retrive every value", function() {
        for (let i = 0; i < 500; i++) {
          expect(subject.fetch(`key ${i}`)).to.equal(`value ${i * 10}`)
        }
      })

      // This test can *technically* fail, based on Math.
      it("really uses all of the underlying lists", function() {
        subject._data.forEach(list => {
          expect(list.size()).to.be.greaterThan(0)
        })
      })
    })
  })
})
