let chai = require('chai');
let expect = chai.expect
let Tree = require('../Tree');

xdescribe('The Tree module', () => {
  let tree

  describe('==> Getters and Setters', () => {
    beforeEach(() => {
      tree = new Tree()
    });

    xit('... #new creates a new Tree instance', () => {
      expect(tree instanceof Tree).to.eql(true);
    });

    xit('... #setTree can set a tree array', () => {
      let array = [1, 3, 5, 2, 15]
      tree.setTree = array
      expect(tree.getTree).to.eql(array)
      expect(tree.getTree.length).to.eql(5)
    });

    xit('... #getTree returns an array', () => {
      expect(tree.getTree).to.be.an('array')
    });

    xit('... #gRoot returns the root element', () => {
      expect(tree.gRoot).to.eql(tree.getTree[0])
      console.log(tree.gRoot)
    });
  });

  describe('==> Finding Tree Nodes ', () => {
    let tree

    beforeEach(() => {
      tree = new Tree()
      tree.setTree = [10, 5, 15, 2, 3, 13, 20, 17]
    });

    it('... #getNode returns the value', () => {
      expect(tree.getNode(2)).to.eql(15)
    });

    it('... #getParent gets a parent index', () => {
      expect(tree.getParent(2)).to.eql(0);
      expect(tree.getParent(6)).to.eql(2);
      expect(tree.getParent(14)).to.eql(6);
    });

    it('... #getLeftChild gets a left index', () => {
      expect(tree.getLeftChild(2)).to.eql(5)
    });

    it('... #getRightChild gets a right index', () => {
      expect(tree.getRightChild(2)).to.eql(6)
    });
  });

  describe('==> Transforming the Tree', () => {
     let tree

     beforeEach(() => {
       tree = new Tree()
       tree.setTree = [10, 5, 15, 2, 3, 13, 20]
    });
    
    it('... #insert properly adds an element', () => {
      tree.insert(0,12)
      expect(tree.getTree[11]).to.eql(12)
    });

    xit('... #addLeftChild add a left child', () => {
      // tree.insert(100)
      test= tree.insert(25)
      // expect(tree.gRoot).to.eql(25)
    });

    xit('... adds a left child', () => {

    });

    xit('... can retrieve a left child', () => {

    });

    xit('... adds a right child', () => {

    });

    xit('... can retrieve a left child', () => {

    });

    describe('... Traversing the', () => {

    });
  });

});