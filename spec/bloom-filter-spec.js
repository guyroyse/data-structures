const chai = require('chai')
const expect = chai.expect

const BloomFilter = require('../data-structures').BloomFilter

describe("BloomFilter", function() {

  const BIT_WIDTH = 1024
  const HASH_COUNT = 3

  let subject

  context("when created", function() {

    beforeEach(function() {
      subject = new BloomFilter({ bitWidth: BIT_WIDTH, hashCount: HASH_COUNT })
    })

    it("has a bit array of requested width", function() {
      expect(subject.bitArray.length).to.equal(BIT_WIDTH)
    })

    it("has a bit array of falses", function() {
      for (let i = 0; i < subject.bitArray.length; i++) {
        expect(subject.bitArray[i]).to.be.false
      }
    })

    it("has a hash array of requested count", function() {
      expect(subject.hashArray.length).to.equal(HASH_COUNT)
    })

    it("does not have sample members", function() {
      expect(subject.hasMember("Steve Butabi")).to.be.false
      expect(subject.hasMember("Doug Butabi")).to.be.false
    })

    context("when we add a member", function() {
      beforeEach(function() {
        subject.addMember("Richard Grieco")
      })

      it("the member is probably there", function() {
        expect(subject.hasMember("Richard Grieco")).to.be.true
      })

      it("the bit array has some true values", function() {
        expect(subject.bitArray.some(x => x === true)).to.be.true
      })

      it("the bit array has the correct number of true values", function() {
        expect(subject.bitArray.filter(x => x === true))
          .to.have.lengthOf(HASH_COUNT)
      })

      it("does not have members that it does not have", function() {
        expect(subject.hasMember("Steve Butabi")).to.be.false
        expect(subject.hasMember("Doug Butabi")).to.be.false
      })

      context("when we add more members", function() {
        beforeEach(function() {
          subject.addMember("Steve Butabi")
          subject.addMember("Doug Butabi")
        })

        it("the newly added members are probably there", function() {
          expect(subject.hasMember("Steve Butabi")).to.be.true
          expect(subject.hasMember("Doug Butabi")).to.be.true
        })

        it("the original member is probably still there", function() {
          expect(subject.hasMember("Richard Grieco")).to.be.true
        })

        it("the bit array has the correct number of true values", function() {
          expect(subject.bitArray.filter(x => x === true))
            .to.have.lengthOf(HASH_COUNT * 3)
        })
      })
    })
  })
})
