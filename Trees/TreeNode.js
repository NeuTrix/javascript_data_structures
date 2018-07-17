// common undirected node structure for tree classes
let chalk = require ('chalk');

class TreeNode {
  
  constructor({ key, data, left = null, right = null } = {}) {
    this.key = key, // address in the array or object
    this.data = data // node value
    this.left = left, // this node's left child
    this.right = right // this node's right child
  }

  insert() {
    // is the root node null
      // key = [0]
    // ? create a new root node 
    // : is this new node a left or right child (comp data)
        // ? is the current child null for L or R
            // ? insert the new node here
              // left key = parent * 2 + 1
              // right key = parent * 2 + 2
            // : recurse to the occupying child until satisfied
  }

  // return the data for this node
  get show () {
    console.log(chalk.yellow(`Data for node ${this.key} is: ${this.data}`))
    return true
  }
  

}

module.exports =  TreeNode 