let chalk = require ('chalk');

// basic undirected node structure for tree classes
class TreeNode {
  
  constructor(data = null) {
    this.data = data, // node value
    this.left = null, // this node's left child 
    this.right = null // this node's right child
  }

  // return the data for this node
  get show () {
    return this.data 
  }

}

module.exports =  TreeNode 