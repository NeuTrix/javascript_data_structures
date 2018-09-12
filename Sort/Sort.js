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

  // ======= Helper Functions =========

  // print formating for title and end or sort
  static printTitle(arr, title, marg) {
    console.log(`\n ${'*'.repeat(marg)} ${title} ${'*'.repeat(marg)}\n\n`)
    console.log(` starting Array:  [ ${arr} ] \n`)
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