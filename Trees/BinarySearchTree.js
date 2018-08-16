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
    // will facilitate printing an ascii tree
    let leftQueue = []// map of left children
    let rightStack = [] // map of right children

    // intialize the data
    let node = this.root // set initial node
    let depth = 1 // current depth of node
    let printData = [node.data+' ---+'] // data and char array for printing  !!!

    // let printOrder = [node] // init root node and depth level
    // set while loop condition to non empty stacks, do once
    do {
      let left = node.left;
      let right = node.right;
      // console.log('---: ', node, left, right)

      // populate data with node's children
      if (left) {
        leftQueue.push([left, depth + 1]) // default depth for root node
      }
      if (right) {
        rightStack.push([right, depth + 1]) // default depth for root node
      }
      // reset node and depth

      if (leftQueue.length) {
        let tuplete = leftQueue.shift()
        node = tuplete[0]; // reset the node 
        depth = tuplete[1]; // reset the depth
      } else if (rightStack.length) {
         let tuplete = rightStack.pop()
         node = tuplete[0]; // reset the node 
         depth = tuplete[1]; // reset the depth
      }
      // adjust for data print length
      let logline 
      // if (!left )
        node.data.toString().length < 2
        ? logline = `${'  | '.repeat(depth - 1)}  ${node.data} --+`
        : logline = `${' - '.repeat(depth - 1)}  ${node.data} |`
      // populate the printing array
      printData.push(logline)

    } while ( (node.right || node.left) || (leftQueue.length || rightStack.length)) 
    
    // pretty print the arra data via forEach
    // printOrder.forEach

    // console.log('=====>', printData)
    printData.forEach(node => console.log(node))
    
    // console.log(test)
    // return the data array
    // console.log('PD==>', printData)
    // console.log('RS==>', rightStack)
    // console.log('LQ==>', leftQueue)
    return printData
  }



  // rebalance
}

module.exports = BinarySearchTree