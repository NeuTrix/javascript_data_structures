let BinarySearchTree = require('../BinarySearchTree');
let chai = require('chai');
let expect = chai.expect;


describe.only('The Binary Search Tree', () => {

  let bst = new BinarySearchTree()

  describe('... Creating a new tree', () => {
    
    it('... creates an instance of BST', () => {
      expect(bst instanceof BinarySearchTree).to.eql(true);
    });

    it('... `#show` returns the tree array', () => {
      expect(bst).has.property('show')
      expect(bst.show instanceof Array).to.eql(true)
    });
  });

  describe('=> the #insert method', () => {

    it('... has an insert method', () => {
      expect(bst).have.property('insert')
        .to.be.a('function')
    });


    
  });




});
