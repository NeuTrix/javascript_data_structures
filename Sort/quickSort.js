const quickSort = function(arr, counter =0) {
  if (arr.length === 0) {
    return [];
  }
  // return arr
  let lesser = [];
  let greater = [];
  let pivot = arr[0];
  // let counter = counter;

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > pivot) {
      greater.push(arr[i])
    } else {
      lesser.push(arr[i])
    }
  }

  // stitch the arrays and the pivot
  return quickSort(lesser).concat(pivot, quickSort(greater))
}

module.exports = quickSort