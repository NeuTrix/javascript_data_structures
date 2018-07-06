
class Heap {

  constructor ({type}) {
    this.heap = [9,1,2,13,4,'2-left',10,50] ;
    this.test = (x,y) => {
      switch (type) {
        case 'min': {
          // console.log('Min: x < y!')
          return  x < y
        };
        case 'max': {
          // console.log('Max: x > y!')
          return  x > y
        };
        default:
          return "Choose a heap type"
      }
    }
  }
  // Common methods for class (nodes)
  hasParent(index) {
    return index > 0
  }
  childType(index) {
    return index % 2 === 1 ? 'left' : 'right'
  }
  getParent(index) {
    let parInd = index % 2 === 1 ? (index - 1) / 2 : (index - 2) / 2 
    let parent = {
      index: parInd,
      value: this.heap[parInd],
    }
    return parent
  } // obj with index and value

  getChildren(index) {
    let left = (index * 2) + 1;
    let right = (index * 2) + 2;
    let children = {
      leftIndex: left,
      leftValue: this.heap[left],
      rightIndex: right,
      rightValue: this.heap[right],
    }
    return children
  }

  swapIndex(a,b) {
    let first = this.heap[a];
    let last = this.heap[b];
    this.heap[a] = last;
    this.heap[b] = first;
    return this.heap
  }

  peek() {
    return this.heap[0]
  } 

  heapify_up() {
    // console.log('===> heapifying up <===')
    let node = {
      index: this.heap.length - 1,
      value: this.heap[this.heap.length - 1],
    }
    let parent = this.getParent(node.index)
    while (this.getParent(node.index).value) {
      // console.log(this.heap)
      // console.log('node', node)
      // console.log('parent', parent)
      if (this.test(node.value, parent.value)) {
        this.swapIndex(node.index, parent.index)
        node.index = parent.index
        node.value = this.heap[node.index]
        parent = this.getParent(node.index)
      } else {
        break
      }
      // console.log(this.heap)
      // console.log('node', node)
      // console.log('parent', parent)
      // console.log('===========================')
    }
      return this.heap

  } 

  heapify_down() {
    // console.log('===> heapifying down <===')
    let node = {
      index: 0,
      value: this.heap[0],
    }
    let children = this.getChildren(node.index)
    // console.log(children)
    while (this.getChildren(node.index).leftValue) {
      let smallIndex = children.leftIndex
      let smallValue = children.leftValue

      if (this.test(children.rightValue, children.leftValue)) {
        smallIndex = children.rightIndex
        smallValue = children.rightValue
      }

      // console.log(this.heap)
      // console.log('node', node)
      // console.log('children', children)
      // console.log('smallest', smallValue)
      if (!this.test(node.value, smallValue)) {
        this.swapIndex(node.index, smallIndex)
          node.index = smallIndex
          node.value = this.heap[node.index]
          children = this.getChildren(node.index)
      } else {
        break
      }
      // console.log(this.heap)
      // console.log('node', node)
      // console.log('children', children)
      // console.log('smallest', smallValue)
      // console.log('===========================')
    }
    return this.heap

  }

  insert(value) {
    // console.log(`===> inserting ${value} <===`)
    // console.log(this.heap)
    this.heap.push(value)
    // console.log(this.heap)
    this.heapify_up()
    return this.heap
  } 

  poll() {
    let front = heap.peek();
    // console.log(`===> polling ${front} <===`)
    //  assign val of last to h[0]
    this.heap[0] = this.heap.pop();
    // heap_down
    this.heapify_down();
    // console.log(this.heap)
    return front
  } 

  get getHeap() {
    return this.heap
  }
}

module.exports = Heap


//  Testing
var heap = new Heap({type:''})
var minHeap = new Heap({type:'min'})
var maxHeap = new Heap({type:'max'})

// console.log(minHeap.getHeap)
// console.log(minHeap.peek())
// console.log(minHeap.test(10,9)) //true
// console.log(maxHeap.test(10,9)) //false
// console.log(heap.test(10,9)) //none
// console.log('parent: ', heap.hasParent(0))
// console.log('childType: ', heap.childType(2))
// console.log('children: ', heap.getChildren(2))
// console.log('getParent: ', heap.getParent(11))

// console.log('********>>', maxHeap.heapify_up())
// console.log('********>>', minHeap.heapify_up())
// console.log('********>>', minHeap.heapify_down())
console.log('#insert: ', minHeap.insert(0))
console.log('#poll: ',minHeap.poll())

// console.log(heap.test())
// console.log(heap,heap.swapIndex(2,0))