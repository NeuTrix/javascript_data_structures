let Node = require('./TreeNode');
let chalk = require('chalk');

class BinarySearchTree {
   constructor() {
    this.root = new Node();
   }

  insert(data, parent = this.root) {
    
    if (this.root.data === null) {
      this.root.data = data;
      console.log(chalk.cyan(`Created root of value: ${this.root.data}`))
    } 
     
    let bigger = data > parent.data;

    if (bigger) {
      if(parent.right) {
        this.insert(data, parent.right)
      } else {
        parent.right = new Node(data)
        console.log(parent)
      }
    }
    
  }


  //  ==== Traversal ====

  // In-Order

  // Pre-Order

  // Post-Order

  // rebalance

  // depth first search (DFS)

  // breadth first search (BFS)



  print(node = this.root) {
    console.log(this.root)
  }
}

// module.exports = { BinarySearchTree as default}
module.exports = BinarySearchTree