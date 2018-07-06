var MinHeap = require('../Heaps/MinHeap')
var chai = require('chai')
var expect = chai.expect

describe ('The MIN Heap module', () => {

	let Heap_1, Heap_2 

	beforeEach(() => {
	 	Heap_1 = new MinHeap([ 24, 25, 15, 33, 33, 11 ])
	 	Heap_2 = new MinHeap([ 99, 25, 15, 33, 33, 18, 1, 167, 9 ])
	 	Heap_3 = new MinHeap([ 85, 12, 25, 15, 33, 33, 14 ])
	});
	
	describe ('STATIC METHODS', () => {

		it ('... creates NEW Heap instances', () => {
			expect(Heap_1 instanceof MinHeap).to.eql(true)
			expect(Heap_2 instanceof MinHeap).to.eql(true)
		});

		it ('... can COMPARE HEAPS', () => {
			let sm =[ 24, 25, 15, 33, 33, 11 ]
			let big = [ 99, 25, 15, 33, 33, 18, 1, 167, 9 ]
			let test = MinHeap.compare_Heaps(Heap_1, Heap_2)
			expect(test.big).to.be.an('array').to.eql(big)
			expect(test.small).to.be.an('array').to.eql(sm)
		});

		it ('... can BALANCE HEAPS', () => {
			let sm =[ 24, 25, 15, 33, 33, 11 ]
			let big = [ 99, 25, 15, 33, 33, 18, 1, 167, 9 ]
			let size_h1 = Heap_1.getHeap.length
			let size_h2 = Heap_2.getHeap.length
			expect (Math.abs(size_h1 - size_h2 )).to.be.above(2)

			let test = MinHeap.balance_Heaps(Heap_1, Heap_2)
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
			let arr = [ 3, 25, 24, 33, 33, 11, 15 ]
			Heap_1.add(3)
			expect(Heap_1.getHeap[0]).to.eql(3)
			expect(Heap_1.getHeap).to.eql(arr)
		});

		it ('... can POLL the heap', () => {
			let arr = [ 12, 14, 25, 15, 33, 33 ]
			Heap_3.poll()
			expect(Heap_3.getHeap[0]).to.eql(12)
			expect(Heap_3.getHeap).to.eql(arr)
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
			let arrUp = [ 9, 99, 15, 25, 33, 18, 1, 167, 33 ]
			expect(Heap_2.getHeap[0]).to.eql(99)
				Heap_2.heapifyUp()	
			expect(Heap_2.getHeap[0]).to.eql(9)
			expect(Heap_2.getHeap).to.eql(arrUp)
		});
	});

	describe ('HEAPIFY DOWN', () => {

		it ('... can HEAPIFY DOWN', () => {
			let arrDown = [ 12, 15, 25, 85, 33, 33, 14 ]
			expect(Heap_3.getHeap[0]).to.eql(85)
				Heap_3.heapifyDown()	
			expect(Heap_3.getHeap[0]).to.eql(12)
			expect(Heap_3.getHeap).to.eql(arrDown)
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