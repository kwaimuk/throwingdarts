/* jshint esversion: 6 */
const chai = require('chai');
const expect = chai.expect;

const throwingDarts = require('../throwingDarts.js');

describe('throwingDarts',() => {
  it('should be a function', () =>{
    expect(throwingDarts).to.be.a('function');
  });

  it('empty collection should return -1',() => {
    expect(throwingDarts([])).to.be.equal(-1);
  });

  it('should return 0 when radius is above 10',() => {
    expect(throwingDarts([11])).to.be.equal(0);
    expect(throwingDarts([15])).to.be.equal(0);
    expect(throwingDarts([9001])).to.be.equal(0);
  });

  it('should return 5 when radius is between 5 and 10',() => {
    expect(throwingDarts([11,5])).to.be.equal(5);
    expect(throwingDarts([10,11])).to.be.equal(5);
  });

  it('should return 10 when less than 5',() => {
    expect(throwingDarts([11,2])).to.be.equal(10);
    expect(throwingDarts([4,-22])).to.be.equal(10);
    expect(throwingDarts([3,-1])).to.be.equal(10);
    expect(throwingDarts([0,-1])).to.be.equal(10);

  });

  it('should return 15 when collection is 1, 5, 11',() => {
    expect(throwingDarts([1, 5, 11])).to.be.equal(15);
  });

  it('should return 15 when collection is 15, 20, 30',() => {
    expect(throwingDarts([15, 20, 30])).to.be.equal(0);
  });

  it('should return 160 when collection is 1, 2, 1, 4, 4, 2',() => {
    expect(throwingDarts([1, 2, 1, 4, 4, 2])).to.be.equal(160);
  });


  console.log(throwingDarts);

});

