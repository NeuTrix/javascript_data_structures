let Node = require('./TreeNode');
let chalk = require('chalk');

class BinarySearchTree {
   constructor() {
    this.tree = []; // data structure for the tree
    this.root = new Node(); 
   }

  insert({data, parent = this.root} = {}) {
    
    if (parent.data === null) {

    }


  }


  //  ==== Traversal ====

  // In-Order

  // Pre-Order

  // Post-Order

  // rebalance

  // depth first search (DFS)

  // breadth first search (BFS)



  get show() {
    return this.tree
  }

}

// module.exports = { BinarySearchTree as default}
module.exports = BinarySearchTree