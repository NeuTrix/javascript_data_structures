let Node = require('./TreeNode');
let chalk = require('chalk');

class BinarySearchTree {
   constructor() {
    this.root = new Node();
   }

  // CRUD operations
  insert(data, node = this.root) {
    if (node.data === null) {
      return node.data = data;
    } 
    if (data >= node.data) {
      return !node.right 
        ? node.right = new Node(data) 
        : this.insert(data, node.right) 
    } 
    if (data < node.data) {
      return !node.left 
        ? node.left = new Node(data)
        : this.insert(data, node.left)
    }
  }

  remove(data, parent = this.root) {
    // find
  }


  // === TRAVERSAL ===
  // InOrder (left, root, right)
  inOrder(node = this.root) {
    let output = [];
    const recurse = (node) => {
      if (node) {
        recurse(node.left) 
        output.push(node)
        recurse(node.right)
      }
    }
    recurse(node)
    return output
  }
  // PreOrder (root, left, right)
  preOrder(node = this.root) {
    let output = [];
    const recurse = (node) => {
      if (node) {
        output.push(node)
        recurse(node.left) 
        recurse(node.right)
      }
    }
    recurse(node)
    return output
  }
  // PostOrder (left, right, root)
  postOrder(node = this.root) {
    let output = [];
    const recurse = (node) => {
      if (node) {
        recurse(node.left) 
        recurse(node.right)
        output.push(node)
      }
    }
    recurse(node)
    return output
  }

  breadthOrder(node = this.root) {
    let output = [];
    let queue =[node];

    while(queue.length > 0) {
      let peek = queue[0];
      peek.left && queue.push(peek.left) 
      peek.right && queue.push(peek.right) 
      output.push(queue.shift())
    }
    return output
  }

  getMin(node = this.root) {
    while(node.left) { 
      node = node.left;
      // return this.getMin(node.left)
    }
    return node
  }

  getMax(node = this.root) {
    while(node.right) {
      node = node.right;
    }
    return node
  }

// buggy execution
  // getMin(node = this.root) {
  //   if(node.left) {
  //     console.log(node)
  //     return node
  //   }
  //   this.getMin(node.left)
  // }
  
  print(array= this.breadthOrder()) {
    // create a default array of bfs search to show
    array.forEach( node => {
      let root = node.data;
      let left = node.left;
      let right = node.right;
      !left && !right 
      ? console.log(`* node ${chalk.green(`[${node.data}] =>\t* LEAF *`)}  `)
      : console.log(`* node [${node.data}]:\t(L) => ${left ? left.data : chalk.red('*')}\t(R) => ${ right ? right.data : chalk.yellow('* null *')}`)
    })
    return array
  }
  // rebalance
}

module.exports = BinarySearchTree