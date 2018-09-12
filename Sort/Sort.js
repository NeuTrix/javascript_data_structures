// various sorting algortihmm in js
class Sort {

  static bubble(arr = []) {
    const title = 'Bubble Sort';
    const marg = 15;
    let counter = 0;
    // ? build error and edge case checks (eg empty, null)
    this.printTitle(arr, title, marg)
    console.time(`\t ${title}`);
      for (let outer = arr.length; outer >= 2; outer--) {
        for (let inner = 0; inner <= outer - 2; inner++) {
          if (arr[inner] > arr[inner + 1]) {
            this.swap(inner, inner + 1, arr)
          }
        }
        counter++;
        console.log(` iteration: ${counter} ==> [ ${arr} ] \n`)
      }
    console.timeEnd(`\t ${title}`);
    this.printEnd(title, marg)
      
    return arr;
  }

  static selection(arr = []) {
    const title = 'Bubble Sort';
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
        console.log(` iteration: ${counter} ==> [ ${arr} ] \n`)
      }
    console.timeEnd(`\t ${title}`);
    this.printEnd(title, marg)

    return arr;
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

  static arrIntegrity(arr) {
    if (arr.length <= 0) {
      console.log('aspodifupaosduf')
      throw new Error('Array arg is empty or null.')
    }
  }

}

module.exports = Sort;