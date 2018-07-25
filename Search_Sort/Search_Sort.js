class Search {
  constructor () {
  }

  findMidPoint (num) {
    return  Math.floor(num/2)
  }

  // completed
  binary (arr, data) {
    let n = arr.length;
    let mid = Math.floor(n/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid + 1);
    // console.log(left, mid, right)
    
    if (data === arr[mid]) {
      // console.log(`==> Data for ${arr[mid]} is at index: `, mid)
      return mid
    } 
    
    if (data < arr[mid]) {
      // console.log(`==> Data for ${arr[mid]} is at index: `, mid)
      // console.log('-'.repeat(10))
      return this.binary(left, data) // need a return
    } else if (data > arr[mid]) {
      // console.log(`==> Data for ${arr[mid]} is at index: `, mid)
      // console.log('-'.repeat(10))
      return this.binary(right, data) + mid + 1 // adjust for rh index
    }
    return 'nada'
  }
}

class Sort {
  constructor () {

  }
}

module.exports = { Search, Sort };