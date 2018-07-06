// module to deliver a binary tree

class Tree {

  constructor() {
    this.tree = []
  }

  get getTree () {
    return this.tree
  }

  get getRoot () {
    return this.tree[0]
  }
  
  set setTree (array) {
    return this.tree = array
  }
  // returns the index of the parent node
  getParent (index) {
    if (index === 0) {
      return null
    }
    return (index % 2 === 0) ? (index - 2) /2 : (index - 2) /2
  }
  // returns the index of the LEFT child node
  getLeftChild (index) {
    return index * 2 + 1
  }
  // returns the index of the RIGHT child node
  getRightChild (index) {
    return index * 2 + 2
  }
  
  getNode (index) {
    return this.tree[index]
  }

  insert (index, node) {
    let left = this.getLeftChild(index)
    let right = this.getRightChild(index)
    let leftVal = this.tree[left]
    let rightVal = this.tree[right]
    let indexVal = this.tree[index]

    if ( index === 0 && indexVal == null) {
      return this.tree[index] = node
    } else

    if (node > indexVal) {

      if (rightVal == undefined) {
        return this.tree[right] = node
      } else {
        return this.insert(right, node)
      }
    } else {
        if (leftVal == null) {
        return this.tree[left] = node
        } else {
        return this.insert(left, node)
        } 
    }
  }

  addLeftChild (parent, child) {

  }
}

// set left child

// set right child

// get root

module.exports = Tree

