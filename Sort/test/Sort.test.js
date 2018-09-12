let chai = require('chai');
let expect = chai.expect;
let Sort = require('../Sort')

describe('The Sorting class', () => {
  let unsorted, sorted;

  beforeEach(() => {
    unsorted = [17, 20, 0, 2, 3, 4]
    sorted = [0, 2, 3, 4, 17, 20];
  })

  describe('The Bubble Sort algorithm', () => {

    it('... is a viable function', () => {
      expect(Sort.bubble).to.be.a('function');
    });

    it('... sorts a very small arr of n = 2', () => {
      let arr = [69, 33]
      expect(Sort.bubble(arr)).to.eql([33, 69]);
    });

    it('... sorts with args passed to #bubble of Sort', () => {
      expect(Sort.bubble(unsorted)).to.eql(sorted);
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

    it('... sorts with args passed to #selection of Sort', () => {
      expect(Sort.selection(unsorted)).to.eql(sorted);
    });

  });

  describe('The Insertion Sort algorithm', () => {

    it('... is a viable function', () => {
      expect(Sort.insertion).to.be.a('function');
    });

    it('... sorts with args passed to #insertion of Sort', () => {
      expect(Sort.insertion(unsorted)).to.eql(sorted);
    });

  });

  describe ('The Merge Sort HELPER methods', () => {
    let even, odd, sorted;

    beforeEach(() => {
      unEven = [9, 1, 11, 4];
      even = [1, 4, 9, 11];
      odd = [2, 5, 7, 8, 10];
      unOdd = [8, 5, 10, 7, 2];
      sortedOdd = [];
      sorted = [1, 2, 4, 5, 7, 8, 9, 10, 11];
    });

    it('... is a viable function', () => {
      expect(Sort.combine).to.be.a('function');
    });
    
    it('... #combine static methodcan combine two sorted arrays', () => {
      expect(Sort.combine(odd, even)).to.eql(sorted);
    });

    it('... the #findMidPoint method works on ODD length arrays', () => {
      expect(Sort.findMidPoint(odd)).to.eql(2)
    });

    it('... the #findMidPoint method works on large ODD length arrays', () => {
      expect(Sort.findMidPoint(sorted)).to.eql(4)
    });

    it('... the #findMidPoint method works on EVEN length arrays', () => {
      expect(Sort.findMidPoint(even)).to.eql(2)
    });

    it('... the #findMidPoint method works on small EVEN length arrays', () => {
      expect(Sort.findMidPoint([0,1])).to.eql(1)
    });

    it('... the #findMidPoint method works on a single el length arrays', () => {
      expect(Sort.findMidPoint([1])).to.eql(0)
    });

  });
  
  describe('The (recursive) Merge Sort algorithm', () => {
    it('... is a viable function', () => {
      expect(Sort.merge_rec).to.be.a('function');
    });

    it('... handles an empty array', () => {
      expect(Sort.merge_rec([])).to.eql([]);
    });

    it('... sorts with simple arr or 1 element ', () => {
      expect(Sort.merge_rec([7])).to.eql([7]);
    });

    it('... sorts with simple arr or 2 elements ', () => {
      expect(Sort.merge_rec(unsorted)).to.eql(sorted);
    });
  });

  describe('The (iterative) Merge Sort algorithm', () => {
    it('... is a viable function', () => {
      expect(Sort.merge_iter).to.be.a('function');
    });

    it('... handles an empty array', () => {
      expect(Sort.merge_iter([])).to.eql([]);
    });

    it('... sorts with simple arr or 1 element ', () => {
      expect(Sort.merge_iter([7])).to.eql([7]);
    });

    it('... sorts with simple arr or 2 elements ', () => {
      expect(Sort.merge_iter(unsorted)).to.eql(sorted);
    });
  });

  describe.only('The (recursive) Quck Sort algorithm', () => {
    it('... is a viable function', () => {
      expect(Sort.quick_recu).to.be.a('function');
    });

    it('... handles an empty array', () => {
      expect(Sort.quick_recu([])).to.eql([]);
    });

    it('... sorts with simple arr or 1 element ', () => {
      expect(Sort.quick_recu([7])).to.eql([7]);
    });

    it.only('... sorts with simple arr or 2 elements ', () => {
      expect(Sort.quick_recu(unsorted)).to.eql(sorted);
    });
  });

});
