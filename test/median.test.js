var chai = require('chai')
var expect = chai.expect

	it ('... test', () => {
		console.log('hello')

		let nums = '123456789'
		let numar= nums.split('')
		console.log(numar)
		let kmap = {}

	 let alpha = ['a','b','c','d','e','f','g','h','i']
		for (let i = 0; i < numar.length; i++) {
			numar.map(num => kmap[alpha[i]] = num)
		}
		console.log(kmap)
	});




	it.only ('... SWITCHES', () => {

	let thing = {a:9, b:4, c:3}
		const switcher = function( startValue, endValue ) {

				const getKeyByValue = (object, value) => {
				  return Object.keys(object).find(key => object[key] === value);
				}
			 let startKey = getKeyByValue(thing, startValue)
			 let endKey = getKeyByValue(thing, endValue)
			switch (startKey) {
				case ('a') : return /[bde]/.test(endKey) ? 1 : 2
				case ('b') : return /[ghi]/.test(endKey) ? 2 : 1
				case ('c') : return /[bef]/.test(endKey) ? 1 : 2
				case ('d') : return /[cfi]/.test(endKey) ? 2 : 1
				case ('e') : return 1
				case ('f') : return /[adg]/.test(endKey) ? 2 : 1
				case ('g') : return /[deh]/.test(endKey) ? 1 : 2
				case ('h') : return /[abc]/.test(endKey) ? 2 : 1
				case ('i') : return /[efh]/.test(endKey) ? 1 : 2
				default: 
				return "false"
			}
		}
		let test = switcher(9,3)
		console.log('====>',test)




	});
// const MaxHeap = class {

// 	// accepts an array and sets a default array object
// 	constructor(array=[]) {
// 		this.heap = array
// 	}

// 	// getter to return the current heap array
// 	get getHeap () {
// 		return this.heap
// 	}

// 	// show the element on top of pile
// 	peek () {
// 		return this.heap[0]
// 	}

// 	swap (indexA, indexB) {
// 		let temp = this.heap[indexA]
// 		this.heap[indexA] = this.heap[indexB]
// 		this.heap[indexB] = temp
// 	};

// 	getParent (index) {
// 		let isleft = (index % 2 === 1)
// 		let isValid = index > 0
// 		let parIndex = isleft ? ((index - 1) / 2) : ((index - 2) / 2)
// 		let value = this.heap[parIndex]
// 		return { isValid, value, index: parIndex}
// 	}

// 	getLeftChild (index) {
// 		index = (index * 2) + 1
// 		let value = this.heap[index]
// 		let isValid = index < this.heap.length
// 		return  { index, isValid, value }
// 	};

// 	getRightChild (index)  {
// 		index = (index * 2) + 2
// 		let value = this.heap[index]
// 		let isValid = index < this.heap.length
// 		return  { index, isValid, value }
// 	};

// 	// moves the bottom element above larger children
// 	heapifyUp () {
// 	 	let heap = this.heap
// 		let index =  heap.length - 1
// 		while (this.getParent(index).isValid) {
		
// 			let parent =  this.getParent(index)
// 			let childValue = heap[index]
// 			if (parent.value > childValue) {
// 				break 
// 			} else {
// 				this.swap(parent.index, index)
// 				index = parent.index
// 			}
// 		}
// 	}

// 	// moves the top element underneath smaller children
// 	heapifyDown () {
// 		let index =  0;
// 		let heap = this.heap;
// 		while (this.getLeftChild(index).isValid) {
			
// 			let rightChild = this.getRightChild(index)
// 			let leftChild = this.getLeftChild(index)
// 			let parent = heap[index]
// 			let big = leftChild

// 			// see which is biger, left or right
// 			if (rightChild.isValid) {
// 			 rightChild.value > leftChild.value ? big = rightChild : ''
// 			}

// 			if (parent > big.value) {
// 				break;
// 			} else {
// 				this.swap(index, big.index)
// 			}
// 			index = big.index
// 		}
// 	};

// 	// adds item at bottom of heap and heapifies up
// 	add (item) {
// 		this.heap.push(item)
// 		this.heapifyUp()
// 	}

// 	// takes the last item, moves to the top and heapify down
// 	poll () {
// 		let item = this.heap.pop()
// 		this.heap[0] = item
// 		this.heapifyDown()
// 	}

// 	// +++++++++ static methods +++++++++ 

// 	// determine the relative size of two heaps
// 	static compare_Heaps (heap_1, heap_2) {
// 		let h1 = heap_1.getHeap, h2 = heap_2.getHeap
// 		let size_1 = h1.length, size_2 = h2.length  
// 		let big, small
// 		size_1 > size_2 ? (big = h1, small = h2) : (big = h2, small = h1)

// 		return { big, small }
// 	};
		
// 	// rebalance two heaps +/- 1	
// 	static balance_Heaps (heap_1, heap_2) {
// 		let size = this.compare_Heaps(heap_1, heap_2)
// 		let big = size.big
// 		let small = size.small
// 		let b = big.length, s = small.length
// 		while (b > s) {
// 			small.push(big.pop())
// 			b--, s++
// 		}
// 		return { big, small }
// 	};
// } // end class

// const MinHeap = class {

// 	// accepts an array and sets a default array object
// 	constructor(array=[]) {
// 		this.heap = array
// 	}

// 	// getter to return the current heap array
// 	get getHeap () {
// 		return this.heap
// 	}

// 	// show the element on top of pile
// 	peek () {
// 		return this.heap[0]
// 	}

// 	swap (indexA, indexB) {
// 		let temp = this.heap[indexA]
// 		this.heap[indexA] = this.heap[indexB]
// 		this.heap[indexB] = temp
// 	};

// 	getParent (index) {
// 		let isleft = (index % 2 === 1)
// 		let isValid = index > 0
// 		let parIndex = isleft ? ((index - 1) / 2) : ((index - 2) / 2)
// 		let value = this.heap[parIndex]
// 		return { isValid, value, index: parIndex}
// 	}

// 	getLeftChild (index) {
// 		index = (index * 2) + 1
// 		let value = this.heap[index]
// 		let isValid = index < this.heap.length
// 		return  { index, isValid, value }
// 	};

// 	getRightChild (index)  {
// 		index = (index * 2) + 2
// 		let value = this.heap[index]
// 		let isValid = index < this.heap.length
// 		return  { index, isValid, value }
// 	};

// 	// moves the bottom element above larger children
// 	heapifyUp () {
// 	 	let heap = this.heap
// 		let index =  heap.length - 1
// 		while (this.getParent(index).isValid) {
		
// 			let parent =  this.getParent(index)
// 			let childValue = heap[index]
// 			if (parent.value < childValue) {
// 				break 
// 			} else {
// 				this.swap(parent.index, index)
// 				index = parent.index
// 			}
// 		}
// 	}

// 	// moves the top element underneath smaller children
// 	heapifyDown () {
// 		let index =  0;
// 		let heap = this.heap;
// 		while (this.getLeftChild(index).isValid) {
			
// 			let rightChild = this.getRightChild(index)
// 			let leftChild = this.getLeftChild(index)
// 			let parent = heap[index]
// 			let small = leftChild

// 			// see which is smaller, left or right
// 			if ( rightChild.isValid) {
// 			 rightChild.value < leftChild.value ? small = rightChild : ''
// 			}

// 			if (parent < small.value) {
// 				break;
// 			} else {
// 				this.swap(index, small.index)
// 			}
// 			index = small.index
// 		}
// 	};

// 	// adds item at bottom of heap and heapifies up
// 	add (item) {
// 		this.heap.push(item)
// 		this.heapifyUp()
// 	}

// 	// takes the last item, moves to the top and heapify down
// 	poll () {
// 		let item = this.heap.pop()
// 		this.heap[0] = item
// 		this.heapifyDown()
// 	}

// 	// +++++++++ static methods +++++++++ 

// 	// determine the relative size of two heaps
// 	static compare_Heaps (heap_1, heap_2) {
// 		let h1 = heap_1.getHeap, h2 = heap_2.getHeap
// 		let size_1 = h1.length, size_2 = h2.length  
// 		let big, small
// 		size_1 > size_2 ? (big = h1, small = h2) : (big = h2, small = h1)

// 		return { big, small }
// 	};
		
// 	// rebalance two heaps +/- 1	
// 	static balance_Heaps (heap_1, heap_2) {
// 		let size = this.compare_Heaps(heap_1, heap_2)
// 		let big = size.big
// 		let small = size.small
// 		let b = big.length, s = small.length
// 		while (b > s) {
// 			small.push(big.pop())
// 			b--, s++
// 		}
// 		return { big, small }
// 	};
// } // end class

// const smallHeap = []
// const bigHeap =[]
// // let median 
// // console.log(median)


// const is_less_than_Median = (value, median) => value < median 

// const peek = (heap) => heap[0]

// const get_Median = (heap1, heap2) => {
// 	let size1 = heap1.length
// 	let size2 = heap2.length
// 	let ans
// 		size2 > size1 ? ans = peek(heap2) : 
// 		size1 > size2 ? ans = peek(heap1) : 
// 		ans = (peek(heap1) + peek(heap2)) / 2
// 	return median = ans.toFixed(1)
// };

// const assign_item = ( item, median ) => {
// 	return item >= median ? bigs.push(item): smalls.push(item)
// }

// // +++++++++ TESTS  +++++++++ 

// xdescribe ('Median challenge', () => {

// 	let heap1 = [4,2,3,4]
// 	let heap2 = [9,10,11,12]
// 	let heap3 = [18,9,10,11,12]

// 	it ('... can split a feed into two heaps', () => {
// 		let array = [ 1,2,3,4,5,10,40,50,20,30]
// 		let median = 15
// 		let bigs =[]
// 		let smalls =[]

// 		let anssmalls = [ 1, 2, 3, 4, 5, 10 ]
// 		let ansbigs = [ 20, 30, 40, 50 ]

// 		const assign_item = ( item, median ) => {
// 			return item >= median ? bigs.push(item): smalls.push(item)
// 		}

// 		for (let i = 0; i < array.length; i++ ) {
// 			assign_item(array[i],median)
// 		}
// 		expect(bigs).to.eql(ansbigs)
// 		expect(smalls).to.eql(anssmalls)
// 	});


// 	it ('... can determine #is_less_than_Median', () => {
// 		let test = is_less_than_Median(10,100)
// 		expect(test).to.be.true
// 	});
	
// 	it ('... can #peek', () => {
// 		expect(peek(heap1)).to.eql(4)
// 		expect(peek(heap2)).to.eql(9)
// 	});

// 	it ('... can #get_Median of two heaps', () => {
// 		let median
		
// 		expect(get_Median(heap1,heap2)).to.eql('6.5')
// 		expect(get_Median(heap3,heap2)).to.eql('18.0')
// console.log(median)
// 	});

// });

// // +++++++++   +++++++++ 

// describe.only('split', () => {
// const set_median = function(big, small) {
//         if (big.length > small.length) {
//             median = big[0].toFixed(1)
//         } else if (big.length < small.length) {
//             median = small[0].toFixed(1)
//         } else {
//             median = ((big[0] + small[0]) /2).toFixed(1)
//         }
//     }

// 		let arr = [1,2,3,4,5,10,40,50,20]
// 		let median = 5

		

// 		const split_array = function(arr) {
// 	  	let bigSet = []
// 	  	let smallSet = []

// 	  	for (let i = 0; i < arr.length; i++) {
// 	  		let item = arr[i]
// 	  		item >= median ? bigSet.push(item): smallSet.push(item)
// 	  	}

//   	return { bigSet, smallSet }
//   };

//   	let split = split_array(arr)

//       let maxSmall = new MaxHeap(split.smallSet)
//       let minBig = new MinHeap(split.bigSet)

//       let smallArr
//       let bigArr

//   it ('... makes two heaps', () => {
//       console.log('mS: ', maxSmall, '  mb: ', minBig)
//       expect( maxSmall instanceof MaxHeap).to.eql(true)
//       expect( minBig instanceof MinHeap).to.eql(true)
//   });

// 	it ('..splits an array', () => {
// 			smallArr = maxSmall.getHeap 
//       bigArr = minBig.getHeap 
//       console.log(smallArr, bigArr)
//       expect(smallArr).to.be.an('array')
// 			expect(bigArr).to.be.an('array')
// 	});

// 	it ('... can heapify up', () => {
// 			console.log ('===>',maxSmall)
// 			maxSmall.heapifyUp()
// 			console.log ('===>',maxSmall)
// 			console.log ('===>',minBig)
// 			minBig.heapifyUp()
// 			console.log ('===>',minBig)
// 	});


//       // maxSmall.heapifyDown()
//       // minBig.heapifyUp()

//       // expect(maxSmall).to.be.an('array')
//       // set_median(minBig.getHeap, maxSmall.getHeap)
		

//       // console.log(arr)

//       // console.log(median)

//   // expect(test.bigSet).to.

//   it.only ('... can balance', () => {
// 	let balance = function (arr1, arr2) {
//          let big, small
// 		arr1.length > arr2.length ? (big = arr1, small = arr2) : (big = arr2, small = arr1)
// 		let b = big.length, s = small.length
// 		while (b > s) {
// 			small.push(big.pop())
// 			b--, s++
// 		}
// 		return { big, small }
// 	};

// 	let arr1= [1,2,3,4,5,6,7,8,9,10,0]
// 	let arr2 = [1]
// 	let test = balance(arr1,arr2)
// 	 console.log(test.big)
// 	 console.log(test.small)

//   });

// });

// describe ('HEAPIFY', () => {
// 	let array = [ 1,2,3,9]
// 	let heap = new MaxHeap(array)
// 	heap.getHeap
// 	heap.poll()
// 	heap.heapifyDown()
// 	console.log(heap)

// });



