// common undirected node structure for tree classes

class TreeNode {
  
  constructor({ key, data, left = null, right = null } = {}) {
    this.key = key, // address in the array or object
    this.data = data, // node value
    this.left = left, // this node's left child
    this.right = right // this node's right child
  }
  // return the data for this node
  get value () {
    return this.data
  }
  // set the left child of this node
  set left (node) {
    this.left = node;
  }
  // set the right child of this noode
  set right (node) {
    this.right = node;
  }
}

module.exports =  TreeNode 