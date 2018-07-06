const MinHeap = class {

	// accepts an array and sets a default array object
	constructor(array=[]) {
		this.heap = array
	}

	// getter to return the current heap array
	get getHeap () {
		return this.heap
	}

	// show the element on top of pile
	peek () {
		return this.heap[0]
	}

	swap (indexA, indexB) {
		let temp = this.heap[indexA]
		this.heap[indexA] = this.heap[indexB]
		this.heap[indexB] = temp
	};

	getParent (index) {
		let isleft = (index % 2 === 1)
		let isValid = index > 0
		let parIndex = isleft ? ((index - 1) / 2) : ((index - 2) / 2)
		let value = this.heap[parIndex]
		return { isValid, value, index: parIndex}
	}

	getLeftChild (index) {
		index = (index * 2) + 1
		let value = this.heap[index]
		let isValid = index < this.heap.length
		return  { index, isValid, value }
	};

	getRightChild (index)  {
		index = (index * 2) + 2
		let value = this.heap[index]
		let isValid = index < this.heap.length
		return  { index, isValid, value }
	};

	// moves the bottom element above larger children
	heapifyUp () {
	 	let heap = this.heap
		let index =  heap.length - 1
		while (this.getParent(index).isValid) {
		
			let parent =  this.getParent(index)
			let childValue = heap[index]
			if (parent.value < childValue) {
				break 
			} else {
				this.swap(parent.index, index)
				index = parent.index
			}
		}
	}

	// moves the top element underneath smaller children
	heapifyDown () {
		let index =  0;
		let heap = this.heap;
		while (this.getLeftChild(index).isValid) {
			
			let rightChild = this.getRightChild(index)
			let leftChild = this.getLeftChild(index)
			let parent = heap[index]
			let small = leftChild

			// see which is smaller, left or right
			if ( rightChild.isValid) {
			 rightChild.value < leftChild.value ? small = rightChild : ''
			}

			if (parent < small.value) {
				break;
			} else {
				this.swap(index, small.index)
			}
			index = small.index
		}
	};

	// adds item at bottom of heap and heapifies up
	add (item) {
		this.heap.push(item)
		this.heapifyUp()
	}

	// takes the last item, moves to the top and heapify down
	poll () {
		let item = this.heap.pop()
		this.heap[0] = item
		this.heapifyDown()
	}

	// +++++++++ static methods +++++++++ 

	// determine the relative size of two heaps
	static compare_Heaps (heap_1, heap_2) {
		let h1 = heap_1.getHeap, h2 = heap_2.getHeap
		let size_1 = h1.length, size_2 = h2.length  
		let big, small
		size_1 > size_2 ? (big = h1, small = h2) : (big = h2, small = h1)

		return { big, small }
	};
		
	// rebalance two heaps +/- 1	
	static balance_Heaps (heap_1, heap_2) {
		let size = this.compare_Heaps(heap_1, heap_2)
		let big = size.big
		let small = size.small
		let b = big.length, s = small.length
		while (b > s) {
			small.push(big.pop())
			b--, s++
		}
		return { big, small }
	};
} // end class

module.exports = MinHeap