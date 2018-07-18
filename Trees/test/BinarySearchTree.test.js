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

  });

  describe('=> the #insert method', () => {
    let bst = new BinarySearchTree();
    let proto = Object.getPrototypeOf(bst)
    let methods = Object.getOwnPropertyNames(proto)
    let arr = [7,5,10,3,6,9,12,1,4,8,11,14]

    arr.forEach(data => {
      return bst.insert(data)
    })

    it('... has an insert method', () => {
      // console.log(methods)
      expect(methods).include('insert');
    });

    it('... is a function', () => {
      expect(bst.insert).to.be.a('function')
    });

    it('... creates the proper root node', () => {
      expect(bst.root.data).to.eql(arr[0])
    });

    it('... root has correct R children', () => {
      expect(bst.root.right.data) // l:1
        .to.eql(arr[2]);
      expect(bst.root.right.right.data) // l:2
        .to.eql(arr[6]);
      expect(bst.root.right.right.right.data) //l:3
        .to.eql(arr[11]);
    });

    it.only('... root has correct L children', () => {
      expect(bst.root.left.data) // l:1
        .to.eql(arr[2]);
      expect(bst.root.left.left.data) // l:2
        .to.eql(arr[6]);
      expect(bst.root.left.left.left.data) //l:3
        .to.eql(arr[11]);
    });

    it.only('... properly inserts right side items', () => {
      
        bst.print()

    });

  });

  describe('+> the #print function', () => {

  });

});
