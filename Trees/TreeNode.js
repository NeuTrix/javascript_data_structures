// common undirected node structure for tree classes
let chalk = require ('chalk');

class TreeNode {
  
  constructor({ key = null, data = null, left = null, right = null } = {}) {
    this.key = key, // address in the array or object
    this.data = data // node value
    this.left = left, // this node's left child
    this.right = right // this node's right child
  }

  // return the data for this node
  get show () {
    console.log(chalk.yellow(`Data for node ${this.key} is: ${this.data}`))
    return true
  }
  

}

module.exports =  TreeNode 