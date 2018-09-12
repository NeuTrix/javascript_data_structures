let chai = require('chai');
let expect = chai.expect;
let Sort = require('../Sort')

describe('The Sorting class', () => {
  
  const unsortedArr = [14, 5, 19, 22, 4, 8, 11, 2, 30, 12];
  const sortedArr = [2, 4, 5, 8, 11, 12, 14, 19, 22, 30];

  describe('The Bubble Sort algorithm', () => {

    it('... is a viable function', () => {
      expect(Sort.bubble).to.be.a('function');
    });

    it('... sorts a very small arr of n = 2', () => {
      let arr = [69, 33]
      expect(Sort.bubble(arr)).to.eql([33, 69]);
    });

    it('... sorts with args passed to #bubble of Sort', () => {
      expect(Sort.bubble(unsortedArr)).to.eql(sortedArr);
    });

    /* xit('... returns an error for a null array', () => {
      // how to keep program from breaking on this test
      let arr = [];
      console.log(Sort.bubble(arr))
    }); */

    /* xit('... returns an error for single element array', () => {
      let arr = [69]
      expect(Sort.bubble(arr)).to.throw(Error);
    }); */

  });

  describe('The Selection Sort algorithm', () => {

    it('... is a viable function', () => {
      expect(Sort.selection).to.be.a('function');
    });

    it('... sorts a very small arr of n = 2', () => {
      let arr = [3, 20, 17, 2, 4, 0]
      expect(Sort.selection(arr)).to.eql([0, 2, 3, 4, 17, 20]);
    });

    it('... sorts with args passed to #selection of Sort', () => {
      expect(Sort.selection(unsortedArr)).to.eql(sortedArr);
    });

  });

  xdescribe('The Insertion Sort algorithm', () => {

    it('... is a viable function', () => {
      expect(Sort.insertion).to.be.a('function');
    });

    it('... sorts a very small arr of n = 2', () => {
      let arr = [3, 20, 17, 2, 4, 0]
      expect(Sort.insertion(arr)).to.eql([0, 2, 3, 4, 17, 20]);
    });

    it('... sorts with args passed to #insertion of Sort', () => {
      expect(Sort.insertion(unsortedArr)).to.eql(sortedArr);
    });

  });

});
