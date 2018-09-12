// various sorting algortihmm in js
class Sort {

  static bubble(arr = []) {
    if (!arr.length > 1) {
      throw new Error('Array arg is empty or null.')
    }
    let counter = 0;
      console.log(`\n ${'*'.repeat(30)}\n\n`)
    for (let outer = arr.length; outer >= 2; outer--) {
      console.log(` iterations: ${counter} array: [ ${arr} ] \n`)
      for (let inner = 0; inner < outer - 2; inner++) {

      }

      counter++
    }

      console.log(`\n ${'*'.repeat(30)}\n\n`)

    return arr;
  }

}


module.exports = Sort;