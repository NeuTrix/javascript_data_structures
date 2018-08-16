let Node = require('./TreeNode');
let chalk = require('chalk');

class BinarySearchTree {
   constructor() {
    this.root = new Node();
    this.nodes = 0;
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
    // 1- leaf/root node
  }

  // === TRAVERSAL ===
  // InOrder (left, root, right)  Returns an array
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
  // PreOrder (root, left, right)  Returns an array
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
  // PostOrder (left, right, root). Returns an array
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
  //  === Search ===
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

  // === Printing ===  
  //!!! refactort this for clarity and better printing
  // print(array= this.breadthOrder()) {
  //   // create a default array of bfs search to show
  //   array.forEach( node => {
  //     let root = node.data;
  //     let left = node.left;
  //     let right = node.right;
  //     !left && !right // if this is  leaf node
  //       ? console.log(`* node ${chalk.green(`[${root}] =>\t* LEAF *`)}  `)
  //       : console.log(`* node [${root}]:\t(L) is ${left // print left
  //         ? left.data // print left data if there
  //         : chalk.red('*')}\t(R) is ${ right // show a marker if no left data
  //           ? right.data //
  //           : chalk.yellow('* null *')}`)
  //   })
  //   return array
  // }

  printNew() {
    // create a queue for left children and a stack for right children
    let leftQueue = [];
    let rightStack =[];
    let node = this.root // set initial node
    let printOrder = [node]; // init array for printing- full node values
    let count = 0
    // set while loop condition to non empty stacks, do once
    do {
      let left = node.left;
      let right = node.right;
      count++
      if (left) { // capture any left children
        leftQueue.push(left)
      }
      if (right) { // capture any right children
        rightStack.push(right)
      }
      // reset the node, checking left first, then right
      leftQueue.length ? node = leftQueue.shift() : node = rightStack.pop()
      // populate the printing array
      printOrder.push(node)
      // break if node is a leaf and the queue andstack are empty
    } while ( (node.right || node.left) || (leftQueue.length || rightStack.length)) 
    
    // pretty print the arra data via forEach
    
    console.log('passed through: ', count++)
    // return the data array
    return printOrder
  }



  // rebalance
}

module.exports = BinarySearchTree