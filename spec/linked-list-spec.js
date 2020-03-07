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

      it("first has a value", function() {
        expect(subject.first().value).to.equal("Barbarian")
      })

      it("next returns null", function() {
        expect(subject.first().next).to.be.null
      })
    })

    context("when three items are added to the list", function() {

        beforeEach(function() {
          subject.append("Barbarian")
          subject.append("Bard")
          subject.append("Baker")
        })
  
        it("it is not empty", function() {
          expect(subject.isEmpty()).to.be.false
        })
  
        // it("has size 3", function() {
        //   expect(subject.size()).to.equal(3)
        // })
  
        it("first has a value", function() {
          expect(subject.first().value).to.equal("Barbarian")
        })
  
        it("next has a value", function() {
          expect(subject.first().next.value).to.equal("Bard")
        })
  
        it("next next has a value", function() {
          expect(subject.first().next.next.value).to.equal("Baker")
        })
      })

  })

})
