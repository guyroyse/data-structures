const chai = require('chai')
const expect = chai.expect

const LinkedList = require('../data-structures').LinkedList

describe("LinkedList", function() {

  let subject

  context("when created", function() {

    beforeEach(function() {
      subject = new LinkedList()
    })

    it("is empty", function() {
      expect(subject.isEmpty()).to.be.true
    })

    it("has size zero", function() {
        expect(subject.size()).to.equal(0)
    })

    it("first returns null", function() {
      expect(subject.first()).to.be.null
    })

    context("when an item is added to the list", function() {

      beforeEach(function() {
        subject.append("Barbarian")
      })

      it("it is not empty", function() {
        expect(subject.isEmpty()).to.be.false
      })

      it("has size 1", function() {
        expect(subject.size()).to.equal(1)
      })

      it("has a first value", function() {
        expect(subject.first().value).to.equal("Barbarian")
      })

      it("has a last value", function() {
        expect(subject.last().value).to.equal("Barbarian")
      })

      it("next returns null", function() {
        expect(subject.first().next).to.be.null
      })

      context("when a second item is added", function() {

        beforeEach(function() {
          subject.append("Bard")
        })

        it("it is not empty", function() {
          expect(subject.isEmpty()).to.be.false
        })
  
        it("has size 2", function() {
          expect(subject.size()).to.equal(2)
        })
  
        it("has the first value", function() {
          expect(subject.first().value).to.equal("Barbarian")
        })
  
        it("has the second value", function() {
          expect(subject.first().next.value).to.equal("Bard")
        })

        it("has the last value", function() {
          expect(subject.last().value).to.equal("Bard")
        })

        it("has the second to last value", function() {
          expect(subject.last().previous.value).to.equal("Barbarian")
        })

        context("when a third item is added", function() {

          beforeEach(function() {
            subject.append("Baker")
          })
  
          it("it is not empty", function() {
            expect(subject.isEmpty()).to.be.false
          })
    
          it("has size 3", function() {
            expect(subject.size()).to.equal(3)
          })
    
          it("has the first value", function() {
            expect(subject.first().value).to.equal("Barbarian")
          })
    
          it("has the second value", function() {
            expect(subject.first().next.value).to.equal("Bard")
          })
  
          it("has the third value", function() {
            expect(subject.first().next.next.value).to.equal("Baker")
          })
  
          it("has the last value", function() {
            expect(subject.last().value).to.equal("Baker")
          })

          it("has the second to last value", function() {
            expect(subject.last().previous.value).to.equal("Bard")
          })

          it("has the third to last value", function() {
            expect(subject.last().previous.previous.value).to.equal("Barbarian")
          })
        })
      })
    })

    context("when we have a nicely populated list", function() {

      beforeEach(function() {
        subject.append("Dwarves")
        subject.append("Elves")
        subject.append("Gnomes")
        subject.append("Halflings")
        subject.append("Orcs")
      })

      describe("#getAt", function() {

        it("gets an item", function() {
          let node = subject.getAt(3)
          expect(node.value).to.equal("Halflings")
        })

        it("gets null at the edge", function() {
          let node = subject.getAt(5)
          expect(node).to.be.null
        })

        it("gets null outside of range", function() {
          let node = subject.getAt(6)
          expect(node).to.be.null
        })

      })

      context("when we remove an item from the end", function() {

        beforeEach(function() {
          subject.removeLast()
        })

        it("has a smaller size", function() {
          expect(subject.size()).to.equal(4)
        })

        it("no longer has that item", function() {
          expect(subject.last().value).to.not.equal("Orcs")
        })

        it("changes the last node", function() {
          expect(subject.last().value).to.equal("Halflings")
          expect(subject.last().next).to.be.null
        })

      })

      context("when we remove an item from the begining", function() {

        beforeEach(function() {
          subject.removeFirst()
        })

        it("has a smaller size", function() {
          expect(subject.size()).to.equal(4)
        })

        it("no longer has that item", function() {
          expect(subject.first().value).to.not.equal("Dwarves")
        })

        it("changes the first node", function() {
          expect(subject.first().value).to.equal("Elves")
          expect(subject.first().previous).to.be.null
        })

      })

      context("when removing an item from the middle", function() {
        beforeEach(function() {
          subject.removeAt(2)
        })

        it("has a smaller size", function() {
          expect(subject.size()).to.equal(4)
        })

        it("no longer has that item", function() {
          expect(subject.first().next.next.value).to.not.equal("Gnomes")
        })
      })

      context("when removing an item from the beginning", function() {
        beforeEach(function() {
          subject.removeAt(0)
        })

        it("has a smaller size", function() {
          expect(subject.size()).to.equal(4)
        })

        it("no longer has that item", function() {
          expect(subject.first().value).to.not.equal("Dwarves")
        })
      })

      context("when removing an item from the end", function() {
        beforeEach(function() {
          subject.removeAt(4)
        })

        it("has a smaller size", function() {
          expect(subject.size()).to.equal(4)
        })

        it("no longer has that item", function() {
          expect(subject.last().value).to.not.equal("Orcs")
        })
      })
    })
  })
})
