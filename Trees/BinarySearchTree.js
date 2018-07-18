let Node = require('./TreeNode');
let chalk = require('chalk');

class BinarySearchTree {
   constructor() {
    this.root = new Node();
   }

  insert(data, parent = this.root) {
    
    if (this.root.data === null) {
      this.root.data = data
      console.log(chalk.cyan(`Created root of value: ${this.root.data}`))
    } else {
      
      
      let bigger = data > parent.data;
      
      if (bigger) {
        if(parent.right) {
          this.insert(data, parent.right)
        } else {
          parent.right = new Node(data)
        }
      } else {
        
        if (parent.left) {
          this.insert(data, parent.left)
        } else {
          parent.left = new Node(data)
        }
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
    if(node.data) {
      // console.log(node)
      console.log(`${node.left ? chalk.yellow(node.left.data) : '***'} <=(L)= ${chalk.cyan(node.data)} =(R)=> ${node.right ? chalk.green(node.right.data):'***'}`)
    } else {
      console.log(`${'++'.repeat(15)}`)
    }
    
    if (node.left) {
      this.print(node.left)
    } 
    
    if (node.right) {
      this.print(node.right)
    } 
    // console.log(node)
    
    return
  }
}

// module.exports = { BinarySearchTree as default}
module.exports = BinarySearchTree