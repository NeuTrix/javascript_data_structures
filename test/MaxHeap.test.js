var MaxHeap = require('../Heaps/MaxHeap')
var chai = require('chai')
var expect = chai.expect

describe ('The MAX Heap module', () => {

	let Heap_1, Heap_2 

	beforeEach(() => {
	 	Heap_1 = new MaxHeap([ 24, 25, 15, 33, 33, 11 ])
	 	Heap_2 = new MaxHeap([ 99, 25, 15, 33, 33, 18, 1, 167, 9 ])
	 	Heap_3 = new MaxHeap([ 85, 12, 25, 15, 33, 33, 14 ])
	 	Heap_4 = new MaxHeap([ 24, 12, 69, 33, 17, 20 ])
	 	Heap_5 = new MaxHeap([ 4, 12, 69, 33, 17, 20, 89 ])
	});
	
	describe ('STATIC METHODS', () => {

		it ('... creates NEW Heap instances', () => {
			expect(Heap_1 instanceof MaxHeap).to.eql(true)
			expect(Heap_2 instanceof MaxHeap).to.eql(true)
		});

		it ('... can COMPARE HEAPS', () => {
			let sm =[ 24, 25, 15, 33, 33, 11 ]
			let big = [ 99, 25, 15, 33, 33, 18, 1, 167, 9 ]
			let test = MaxHeap.compare_Heaps(Heap_1, Heap_2)
			expect(test.big).to.be.an('array').to.eql(big)
			expect(test.small).to.be.an('array').to.eql(sm)
		});

		it ('... can BALANCE HEAPS', () => {
			let sm =[ 24, 25, 15, 33, 33, 11 ]
			let big = [ 99, 25, 15, 33, 33, 18, 1, 167, 9 ]
			let size_h1 = Heap_1.getHeap.length
			let size_h2 = Heap_2.getHeap.length
			expect (Math.abs(size_h1 - size_h2 )).to.be.above(2)

			let test = MaxHeap.balance_Heaps(Heap_1, Heap_2)
			let size_sm = test.small.length
			let size_big = test.big.length
			expect (Math.abs(size_big - size_sm )).to.be.below(2)
		});

	});

	describe ('PEEK', () => {
		it ('... can PEEK at its top element', () => {
			expect(Heap_1.peek()).to.eql(24)
			expect(Heap_2.peek()).to.eql(99)
		});
	});

	describe ('ADD & POLL', () => {

		it ('... can ADD to the heap', () => {
			let arr = [ 200, 25, 24, 33, 33, 11, 15 ]
			Heap_1.add(200)
			let heap = Heap_1.getHeap
			// console.log(heap)
			let size  = heap.length
			expect(heap[0]).to.eql(200)
			expect(heap).to.eql(arr)
		});

		it ('... can POLL the heap', () => {
			let arr = [ 69, 12, 20, 33, 17 ]
			Heap_4.poll()
			let heap = Heap_4.getHeap
			// console.log(heap)
			expect(heap[0]).to.eql(69)
			expect(heap).to.eql(arr)
		});
	});

	describe ('SWAPPING', () => {
		it ('... can SWAP indexes', () => {
			expect(Heap_1.getHeap[0]).to.eql(24)
				Heap_1.swap(0,2)
			expect(Heap_1.getHeap[0]).to.eql(15)
		});
	});

	describe ('HEAPIFY UP', () => {

		it ('... can HEAPIFY UP', () => {
			let arrUp = [ 89, 12, 4, 33, 17, 20, 69 ]		
			let heap = Heap_5.getHeap
			// console.log(heap)
			expect(heap[0]).to.eql(4)
				Heap_5.heapifyUp()	
			// console.log(heap)
			expect(heap[0]).to.eql(89)
			expect(heap).to.eql(arrUp)
		});
	});

	describe ('HEAPIFY DOWN', () => {

		it ('... can HEAPIFY DOWN', () => {
			let arrDown = [ 69, 12, 89, 33, 17, 20, 4 ]
			let heap = Heap_5.getHeap
			// console.log(heap)
			expect(heap[0]).to.eql(4)
				Heap_5.heapifyDown()	
			// console.log(heap)
			expect(heap[0]).to.eql(69)
			expect(heap).to.eql(arrDown)
		});
	});

	describe ('GET PARENT ', () => {

		it ('... can get the Parent value', () => {
			expect(Heap_1.getParent(2).value).to.eql(24)
			expect(Heap_2.getParent(3).value).to.eql(25)
		});

		it ('... can get the Parent index', () => {
			expect(Heap_1.getParent(2).index).to.eql(0)
			expect(Heap_2.getParent(3).index).to.eql(1)
		});

		it ('... can get the Parent isValid', () => {
			expect(Heap_1.getParent(2).isValid).to.eql(true)
			expect(Heap_2.getParent(0).isValid).to.eql(false)
		});
	});

	describe ('GET LEFT CHILD ', () => {
		it ('... can get the Child value', () => {
			expect(Heap_1.getLeftChild(0).value).to.eql(25)
			expect(Heap_2.getLeftChild(3).value).to.eql(167)
		});

		it ('... can get the Child index', () => {
			expect(Heap_1.getLeftChild(0).index).to.eql(1)
			expect(Heap_2.getLeftChild(3).index).to.eql(7)
		});

		it ('... can get the Child isValid', () => {
			expect(Heap_1.getLeftChild(0).isValid).to.eql(true)
			expect(Heap_2.getLeftChild(4).isValid).to.eql(false)
		});
	});

	describe ('GET RIGHT CHILD', () => {
		it ('... can get the Child value', () => {
			expect(Heap_2.getRightChild(0).value).to.eql(15)
			expect(Heap_2.getRightChild(3).value).to.eql(9)
		}); 

		it ('... can get the Child index', () => {
			expect(Heap_2.getRightChild(0).index).to.eql(2)
			expect(Heap_2.getRightChild(3).index).to.eql(8)
		});

		it ('... can get the Child isValid', () => {
			expect(Heap_2.getRightChild(0).isValid).to.eql(true)
			expect(Heap_2.getRightChild(4).isValid).to.eql(false)
		});
	});

});