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
    // #print constants
    const title = 'Insertion Sort';
    const marg = 15;
    const n = arr.length; 
    const sorted = [] // build new array
    const binary =  new Array(n).fill(0) // track selected minimums
    let counter = 0; // track iterations
    // ? build error and edge case checks (eg empty, null)
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
    // for printing
    // const title = 'Merge Sort';
    // const marg = 15;
    // base case
    let length = arr.length;
    if ( length <= 1) {
      return arr
    }
    // for algorithm
    // let mid = this.findMidPoint(arr)
    let mid = Math.floor(length / 2);

    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    // let left = this.merge_rec(arr.slice(0, mid));
    // let right = this.merge_rec(arr.slice(mid));

    return this.combine(this.merge_rec(left), this.merge_rec(right));
  }

  // ======= Helper Functions =========

// print formating for title and end or sort
  // ====> merge sort Helpers
  // combine |sorted| arrays
  static combine(left = [], right = []) {
    const result = [];
    // while either has length...
    while (left.length > 0 || right.length > 0) {
      // ...if both have values...
      if (left.length > 0 && right.length > 0) {
        // ...then, grab the smallest...
        if (left[0] < right[0]) {
          result.push(left.shift()) ;
        } else if (left[0] >= right[0]) {
          result.push(right.shift());
        }
      // Otherwise if one is empty...
      } else if (left.length  > 0) {
          result.push(left.shift());
      } else if (right.length > 0) {
          result.push(right.shift());
      }
      console.log(`==> L: [${left}] | R: [${right}] | Comb : [${result}] \n`)
    }
    
    return result;
  }

  static findMidPoint(arr) {
    return Math.floor(arr.length / 2);
  }

  static printTitle(arr, title, marg) {
    console.log(`\n ${'*'.repeat(marg)} ${title} ${'*'.repeat(marg)}\n\n`)
    console.log(` starting Array:  [ ${arr} ] \n`);
  }

  static printEnd(title, marg) {
    console.log(`\n ${'*'.repeat(2 + title.length + (marg * 2))}\n\n`);
  }
  // swap elements in an array
  static swap(index1, index2, arr) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

}

module.exports = Sort;