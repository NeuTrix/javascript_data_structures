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

  printTree() {
    // create queue and stack tuples with node for key and tree depth for values
    let leftQueue = []// map of left children
    let rightStack = [] // map of right children

    // intialize the data
    let node = this.root; // set initial node
    let depth = 1; // current depth of node
    let rawData = []; // capture raw node sequence. Init with root node
    // initialize print object
    let printData = [chalk.yellow.dim.bold(`Binary Search Tree :\n`)] 

    // iterate over nodes
    do {
      rawData.push(node)
      let left = node.left; // current left-chlld
      let right = node.right; // current right-child
      // populate data with node's children
      if (left) {
        leftQueue.push([left, depth + 1]) // default depth for root node
      }
      if (right) {
        rightStack.push([right, depth + 1]) // default depth for root node
      }
      
      // account for leafs and adjust print layout for length of data
      let logline 
      if (!left && !right) {
        node.data.toString().length < 2
        ? logline = chalk.green(`${chalk.grey(' |  '.repeat(depth - 1))}${node.data}${chalk.green.dim(' *')}`)
        : logline = chalk.green(`${chalk.grey(' |  '.repeat(depth - 1))} ${node.data}${chalk.green.dim(' *')}`) 
      } else { // for non leaf nodes
        node.data.toString().length < 2
        ? logline = `${chalk.grey(' |  '.repeat(depth - 1))} ${node.data} ${chalk.grey('-+')}`
        : logline = `${chalk.grey(' |  '.repeat(depth - 1))}  ${node.data} ${chalk.grey('-+')}`
      }
      // reset node and depth variables for next node
      if (leftQueue.length) { // left child operations
        let tuplete = leftQueue.shift()
        node = tuplete[0]; // reset the node 
        depth = tuplete[1]; // reset the depth
      } else if (rightStack.length) { //right child operations
        let tuplete = rightStack.pop()
        node = tuplete[0]; // reset the node 
        depth = tuplete[1]; // reset the depth
      }
      // populate the printing array
      printData.push(logline)
      // validate final node ...
    } while ( (node.right || node.left) || (leftQueue.length || rightStack.length)) 
    
    // inefficient capture of last element to print array
    let logline
    node.data.toString().length < 2
      ? logline = chalk.green(`${chalk.grey(' |  '.repeat(depth - 1))} ${node.data} ${chalk.green.dim('*')}`)
      : logline = chalk.green(`${chalk.grey(' |  '.repeat(depth - 1))} ${node.data} ${chalk.green.dim('*')}`)
    // populate the pring object
      rawData.push(node)
    // update raw data  
    printData.push(logline)
    printData.forEach(node => console.log(node))
    
    return rawData
  }

  // rebalance/ rotation
    // let X = rotation direction, Y = counter direction
    // 1. Clone the Root (R0)
    // - cc root to Temp variable (T0)
    // 2. Foster the grandkids
    // - find the root node's Y child (R0.y)'s X child (R0.y.x)
    // - move (R0.y.x) to T0.x child position. call this T1.
    // - set former parent R0.y.x position to 'null'
    // 3. Promote the Child 
    // - assign R0.y to the root node position (R0). Call this R1
    // 4. Adopt the Clone
    // - move the clone to R1.x chil position 
}

module.exports = BinarySearchTree