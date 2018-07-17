let BinarySearchTree = require('../BinarySearchTree');
let chai = require('chai');
let expect = chai.expect;
let chalk = require('chalk');


describe.only('The Binary Search Tree', () => {

  describe('... Creating a new tree', () => {
    
    let bst = new BinarySearchTree()
    
    it('... creates an instance of BST', () => {
      expect(bst instanceof BinarySearchTree).to.eql(true);
    });

    it('... the `#show` getter returns the tree array', () => {
      expect(bst).has.property('show');
      expect(bst.show instanceof Array).to.eql(true);
    });

  });

  describe.only('=> the #insert method', () => {
    let bst = new BinarySearchTree();
    let proto = Object.getPrototypeOf(bst)
    let methods = Object.getOwnPropertyNames(proto)
    let arr = [7, 5, 10, 3, 6, 9, 12, 1, 4, 8, null, 11, 14]

    it('... has an insert method', () => {
      // console.log(methods)
      expect(methods).include('insert');
    });

    it('... is a function', () => {
      expect(bst.insert).to.be.a('function')
    });

    it.only('... creates the proper root node', () => {
      expect(bst.root.data).to.eql(arr[0])
    });

  });

});
