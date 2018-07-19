let BinarySearchTree = require('../BinarySearchTree');
let chai = require('chai');
let expect = chai.expect;
let chalk = require('chalk');

describe.only('The Binary Search Tree', () => {

  let bst = new BinarySearchTree();
  let proto = Object.getPrototypeOf(bst)
  let methods = Object.getOwnPropertyNames(proto)
  let arr = [7,5,10,3,6,9,12,1,4,8,11,14]

  arr.forEach(data => {
    return bst.insert(data)
  })
  describe('=> The #new function', () => {
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
  });

  describe('=> The #print method shows in console:', () => {
    it('... prints a tree', () => {
      let traversal = bst.inOrder()
      let test = bst.print(traversal);
    });
  });

  describe('=> the #inOrder traversal method', () => {
    let inSorted = [1,3,4,5,6,7,8,9,10,11,12,14]
    let test = []
    bst.inOrder().forEach(node => test.push(node.data))
    it('... returns an ordered array', () => {
      expect(test).be.an('array')
        .to.eql(inSorted)
    });
  });

  describe('=> the #preOrder traversal method', () => {
    let preSorted = [7,5,3,1,4,6,10,9,8,12,11,14]
    let test = []
    bst.preOrder().forEach(node => test.push(node.data))
    it('... returns an ordered array', () => {
      expect(test).be.an('array')
        .to.eql(preSorted)
    });
  });

  describe('=> the #postOrder traversal method', () => {
    let postSorted = [1,4,3,6,5,8,9,11,14,12,10,7]
    let test = []
    bst.postOrder().forEach(node => test.push(node.data))
    it('... returns an ordered array', () => {
      expect(test).be.an('array')
        .to.eql(postSorted)
    });
  });

  describe('=> the #breadthOrder traversal method', () => {
    let breadthSorted = [7,5,10,3,6,9,12,1,4,8,11,14]
    let broad = bst.breadthOrder()
    let test = []
    broad.forEach(node => test.push(node.data))
    it('... the method exists', () => {
      expect(bst).to.have.property('breadthOrder')
        .to.be.a('function')
    });
    
    it('... returns an ordered array', () => {
      expect(test).be.an('array')
        .to.eql(breadthSorted)
    });
  });

  describe('=> #getMin method', () => {
    let branch = bst.root.right
    // let result = bst.getMin(root)

    it('... confirming search on root`s Right branch', () => {
      expect(branch.data).to.eql(arr[2]) // confirm branch
    });

    it('... returns the min node in the branch', () => {
      let search = bst.getMin(branch)// node
      // console.log(branch.left)
      // expect(search.data).to.eql(arr[9])
    });
  });


});
