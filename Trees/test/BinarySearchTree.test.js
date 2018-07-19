let BinarySearchTree = require('../BinarySearchTree');
let chai = require('chai');
let expect = chai.expect;
let chalk = require('chalk');

describe.only('The Binary Search Tree', () => {

  let bst = new BinarySearchTree();
  let proto = Object.getPrototypeOf(bst)
  let methods = Object.getOwnPropertyNames(proto)
  let arr = [7, 5, 10, 3, 6, 9, 12, 1, 4, 8, 11, 14]

  arr.forEach(data => {
    return bst.insert(data)
  })
  describe('... Creating a new tree', () => {
    let bst = new BinarySearchTree()
    
    it('... creates an instance of BST', () => {
      expect(bst instanceof BinarySearchTree).to.eql(true);
    });

  });

  describe('=> the #insert method', () => {

    it('... has an insert method', () => {
      // console.log(methods)
      expect(methods).include('insert');
    });

    it('... is a function', () => {
      expect(bst.insert).to.be.a('function')
    });

    it('... creates the proper root node', () => {
      // console.log(bst)
      expect(bst.root.data).to.eql(arr[0])
    });

    it('... root has correct L children', () => {
      expect(bst.root.left.data) // l:1
        .to.eql(arr[1]);
    });

    it('... root correct L grands', () => {
      expect(bst.root.left.left.data) // l:2
        .to.eql(arr[3]);
    });
   
    it('... root correct L great grands', () => {
      expect(bst.root.left.left.left.data) //l:3
        .to.eql(arr[7]);
    });

    it('... root has correct R children', () => {
      expect(bst.root.right.data) // l:1
        .to.eql(arr[2]);
    });

    it('... root correct R grands', () => {
      expect(bst.root.right.right.data) // l:2
        .to.eql(arr[6]);
    });
   
    it('... root correct R great grands', () => {
      expect(bst.root.right.right.right.data) //l:3
        .to.eql(arr[11]);
    });

    it('... prints a tree', () =>   {
        bst.print()
    });

  });

  xdescribe('=> the #inOrder traversal method', () => {
    let sorted = [ 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14 ].toString()
    console.log(sorted)
    it('... returns an ordered array', () => {
      expect(bst.inOrder()).to.eql(sorted)
    });
  });

  describe.only('=> #getMin method', () => {
    let branch = bst.root.right
    let test2 = bst.outOrder()
    let test = bst.inOrder()
    console.log('==>',test)
    console.log('xxx>',test2)
    // let result = bst.getMin(root)

    it('... confirming search on root`s Right branch', () => {
      expect(branch.data).to.eql(arr[2]) // confirm branch
    });

    it.only('... returns the min node in the branch', () => {
      let search = bst.getMin(branch)// node
      // console.log(branch.left)
      // expect(search.data).to.eql(arr[9])
    });
  });


});
