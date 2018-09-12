let chai = require('chai');
let expect = chai.expect;
let Sort = require('../Sort')

describe('The Sorting class', () => {
  
  const unsortedArr = [14, 5, 19, 22, 4, 8, 11, 2, 30, 12];
  const sortedArr = [2, 4, 5, 8, 11, 12, 14, 19, 22, 30];
  
  it('... creates a new Sort instance', () => {
    const sort = new Sort(unsortedArr);
    expect(sort instanceof Sort).to.eql(true);
  });

  describe('The Bubble Sort algorithm', () => {

    it('... is a viable function', () => {
      expect(Sort.bubble).to.be.a('function');
    });

    xit('... returns an error for a null array', () => {
      // how to keep program from breaking on this test
      let arr = [];
      expect(Sort.bubble(arr)).to.throw(Error);
    });

    xit('... returns an error for single element array', () => {
      let arr = [69]
      expect(Sort.bubble(arr)).to.throw(Error);
    });

    it('... sorts a very small arr of n = 2', () => {
      let arr = [69, 33]
      expect(Sort.bubble(arr)).to.eql([33, 69]);
    });

    xit('... sorts an array with default args to Sort()', () => {
      expect(Sort.bubble()).to.eql(sortedArr);
    });

    xit('... sorts with args passed to #bubble of Sort', () => {
      const unsorted_B = [ 4, 3, 6, 7, 2, 1, 0, 5 ]
      const sorted_B   = [ 0, 1, 2, 3, 4, 5, 6, 7 ]
      expect(Sort.bubble(unsorted_B)).to.eql(sorted_B);
    });

  });




});