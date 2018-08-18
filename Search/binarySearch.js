const binary = function(data, arr) {
  let n = arr.length 
  let ptL = 0; // set left pointer
  let ptR = n - 1 ; // set right pointer
  let count = 0; // track number of iterations 

  while (ptL <= ptR) {
    let mp = Math.floor(((ptR +1) + ptL ) / 2)
    count += 1;
    // console.log('==>', ptL, mp, ptR, '==>', data, arr[mp])
    if (data === arr[mp]) {
      console.log(`After ${count} cycles, found data: ${data} at index ${mp} of array`)
      return mp
    }
    data < arr[mp] ? ptR = mp - 1 : ptL = mp +1; // reset the pointers
  }
  console.log(`Did not find ${data} in the array`)
  return -1
}

module.exports = binary