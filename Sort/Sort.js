// various sorting algortihmm in js
class Sort {

  // static print(func) {
  //   console.time('test')
  //   console.log(`xxxx  ${func}  xxxx`)
  //   return func
  // }

  static bubble(arr = []) {
    if (!arr.length > 1) {
      throw new Error('Array arg is empty or null.')
    }
    let counter = 0;
    // print function
    console.log(`\n ${'*'.repeat(15)} Bubble Sort ${'*'.repeat(15)}\n\n`)
    console.time(`\t Bubble Sort Time`);
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
      console.timeEnd(`\t Bubble Sort Time`);
      console.log(`\n ${'*'.repeat(40)}\n\n`);
    return arr;
  }

  static selection(arr = []) {
    if (!arr.length > 1) {
      throw new Error('Array arg is empty or null.')
    }

    let counter = 0;
    let minimum = arr[0]
      console.log(`\n ${'*'.repeat(15)} Selection Sort ${'*'.repeat(15)}\n\n`)
      console.time(`\t Selection Sort Time`);
      console.log(` starting Array:  [ ${arr} ] \n`)
    
    for (let i = 0; i < arr.length; i++) {
      if (arr)


      counter++;
      console.log(` iteration: ${counter} ==> [ ${arr} ] \n`)
    }
      console.timeEnd(`\t Selection Sort Time`);
      console.log(`\n ${'*'.repeat(40)}\n\n`);
    return arr;
  }

}


module.exports = Sort;