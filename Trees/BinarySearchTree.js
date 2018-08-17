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
  // find the minimum element in the tree
  getMin(node = this.root) {
    while(node.left) { 
      node = node.left;
      // return this.getMin(node.left)
    }
    return node
  }
  // find the maximum element in the tree
  getMax(node = this.root) {
    while(node.right) {
      node = node.right;
    }
    return node
  }

  // Helper method to provide a pretty console.log format for print function
  logFormat(node, depth = 1, color = white, tag = '') {
    return node.data.toString().length < 2 
    // for single digit numbers, adding a leading '0' digit as well
    ? chalk[color](`${chalk.grey(' |  '.repeat(depth - 1))} 0${node.data}${chalk[color].dim(tag)}`)
    // for double digit numbers
    : chalk[color](`${chalk.grey(' |  '.repeat(depth - 1))} ${node.data}${chalk[color].dim( tag)}`)
  }
  // print the tree to console and return an array of nodes, sorted in tree display (prefix) order
  printTree() {
    // create queue and stack tuples with node for key and tree depth for values
    let leftQueue = []// map of left children
    let rightStack = [] // map of right children

    // intialize the data
    let node = this.root; // set initial node
    let depth = 1; // current depth of node
    let rawData = [node]; // capture raw node sequence, initialize with root node
    let printData = [chalk.yellow.dim.bold(`Binary Search Tree :\n`)] // initialize print object

    do {
      // rawData.push(node)
      let left = node.left; // current left-chlld
      let right = node.right; // current right-child
      // populate data with node's children
      if (left) {
        leftQueue.push([left, depth + 1]) // default depth for root node
      }
      if (right) {
        rightStack.push([right, depth + 1]) // default depth for root node
      }
      
      if (node === this.root) {
        printData.push(this.logFormat(node, depth, 'yellow', '-root \n')) // print format for the root node
      } else if (!left && !right) { 
        printData.push(this.logFormat(node, depth, 'green', '-*')) // print format for leaf nodes
      } else { 
        printData.push(this.logFormat(node, depth, 'white', '--|')) // general print format
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
       // populate the return data object with the current node 
       rawData.push(node)
    }
    while ((node.right || node.left) || (leftQueue.length || rightStack.length)) // verify end node
    
    // capture log  of last element to print array
    printData.push(this.logFormat(node, depth, 'green', '-*'))
    // update and print the data to console
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