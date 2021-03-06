// various sorting algortihmm in js
class Sort {


  static bubble(arr = []) {
    const title = 'Bubble Sort';
    const marg = 15;
    let counter = 0;
    // ? build error and edge case checks (eg empty, null)
    this.printTitle(arr, title, marg);
    console.time(`\t ${title}`);
      for (let outer = arr.length; outer >= 2; outer--) {
        for (let inner = 0; inner <= outer - 2; inner++) {
          if (arr[inner] > arr[inner + 1]) {
            this.swap(inner, inner + 1, arr);
          }
        }
        counter++;
        console.log(` iteration: ${counter} ==> [ ${arr} ] \n`);
      }
      console.timeEnd(`\t ${title}`);
    this.printEnd(title, marg);
      
    return arr;
  }

  static selection(arr = []) {
    const title = 'Selection Sort';
    const marg = 15;
    let counter = 0;
    // ? build error and edge case checks (eg empty, null)
    this.printTitle(arr, title, marg)
    console.time(`\t ${title}`);
      for (let outer = 0; outer < arr.length - 1; outer++) {
        let minIndex = outer;
        // set the min index based on smallest found
        for (let inner = outer ; inner < arr.length ; inner++) {
          if (arr[inner] < arr[minIndex]) {
            minIndex = inner;
          }
        }
        this.swap(outer, minIndex, arr);
        counter++;
        console.log(` iteration: ${counter} ==> [ ${arr} ] \n`);
      }
    console.timeEnd(`\t ${title}`);
    this.printEnd(title, marg);

    return arr;
  }

  static insertion(arr = []) {
    // for #print function
    const title = 'Insertion Sort';
    const marg = 15;
    let counter = 0; // track iterations
    //  for algorithm
    const n = arr.length; 
    const sorted = [] // build new array
    const binary =  new Array(n).fill(0) // track selected items

    this.printTitle(arr, title, marg)
    console.time(`\t ${title}`);
      for (let outr = 0; outr < n ; outr++) {
        let min = null;
        // set the min index based on smallest found
        for (let inr = 0 ; inr < n ; inr++) {
          // eval min === null in case arr value = 0
          if(!binary[inr] && (min === null || arr[inr] < arr[min])) {
            min = inr;
          }
        }
        binary[min] = 1; // mark as selected
        sorted[outr] = arr[min]; // build retur array
        counter++; // track iterations
        console.log(` iteration: ${counter} ==> [ ${sorted} ] \n`);
      }
    console.timeEnd(`\t ${title}`);
    this.printEnd(title, marg);

    return sorted;
  }

  static merge_rec(arr) {
    if (arr.length <= 1) { // base case
      return arr
    }
    const mid = this.findMidPoint(arr)
    const left = this.merge_rec(arr.slice(0, mid));
    const right = this.merge_rec(arr.slice(mid));

    return this.combine(left, right);
  }

  static merge_iter(arr = []) {
    // for printing
    const title = 'Merge Sort (iterative)';
    const marg = 10;
    let counter = 0; // track iterations
    this.printTitle(arr, title, marg);
    console.time(`\t ${title}`);

    // for algo
    let sorted = [];
    
    arr.forEach(value => {
      // could simply pass `[value]` but this reads better
      sorted = this.combine(sorted, arr = [value]);
      // for printing
      counter++; // track iterations
      console.log(` iteration: ${counter} ==> [ ${sorted} ] \n`);
    })
    // for printing
    console.timeEnd(`\t ${title}`);
    this.printEnd(title, marg);

    return sorted
  }

  static quick_recu(arr = []) {
    if (arr.length <= 1) {
      return arr;
    } // base case
    let left =  [];
    let right = [];
    let pivot = arr.pop();
    // sort the balance of array Big O(n)
    arr.forEach(val => {
      val < pivot ? left.push(val) : right.push(val);
    })
    // log results
    console.log(`\t==> Left: [${left}] | Pivot: ${pivot} | Right: [${right}] `)
    // recurse left and right arrays to base cases
    left = this.quick_recu(left);
    right = this.quick_recu(right);
    // insert the pivot between the L | R results 
    return left.concat(pivot).concat(right)
  }

  // *************** Helper Functions ***************

  // ===== SORTING HELPERS =====
  // combine |sorted| arrays
  static combine(left = [], right = []) { // set defaults
    const result = [];
    // while either has length...
    while (left.length || right.length) {
      // ...if both have values...
      if (left.length && right.length ) {
        // ...then, grab and push the smallest to result...
        left[0] < right[0]
        ? result.push(left.shift())
        : result.push(right.shift());
        // Otherwise if only one is empty...
      } else if (left.length) {
        result.push(left.shift()); // clear the left array
      } else if (right.length) {
        result.push(right.shift()); // clear the right array
      }
    }
    return result;
  }
  // find midpoint index in an array
  static findMidPoint(arr =[]) {
    return Math.floor(arr.length / 2);
  }
  // swap elements in an array
  static swap(index1, index2, arr = []) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  // ===== PRINTER HELPERS =====
  //print formating for title
  static printTitle(arr, title, marg) {
    console.log(`\n ${'*'.repeat(marg)} ${title} ${'*'.repeat(marg)}\n\n`)
    console.log(` starting Array:  [ ${arr} ] \n`);
  }
  // print closing graphic
  static printEnd(title, marg) {
    console.log(`\n ${'*'.repeat(2 + title.length + (marg * 2))}\n\n`);
  }
  
}

module.exports = Sort;