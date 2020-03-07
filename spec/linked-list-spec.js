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
        })
      })
    })
  })
})
