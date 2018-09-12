// various sorting algortihmm in js
class Sort {

  static bubble(arr = []) {
    if (!arr.length > 1) {
      throw new Error('Array arg is empty or null.')
    }
    let counter = 0;
      console.log(`\n ${'*'.repeat(30)}\n\n`)
      console.log(` starting Array:  [ ${arr} ] \n`)
    for (let outer = arr.length; outer >= 2; outer--) {
      for (let inner = 0; inner <= outer - 2; inner++) {
        if (arr[inner] > arr[inner + 1]) {
          let temp = arr[inner];
          arr[inner] = arr[inner + 1];
          arr[inner + 1] = temp;
        }
      }
      counter++;
      console.log(` iteration: ${counter} ==> [ ${arr} ] \n`)
    }
      console.log(`\n ${'*'.repeat(30)}\n\n`)
    return arr;
  }

}


module.exports = Sort;