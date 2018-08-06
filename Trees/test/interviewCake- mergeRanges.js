// function mergeRanges(meetings) {
//   meetings.sort( (a,b) => a.startTime - b.startTime)
//   let n = meetings.length;
//   let cal = [];
  
//   const compare = (a,b) => {
//     let mtg = {};
//     if (!a || !b) {
//       return null
//     }
//     if (a.endTime >= b.startTime && b.endTime >= a.startTime) {
//         mtg.startTime = Math.min(a.startTime, b.startTime);
//         mtg.endTime = Math.max(a.endTime, b.endTime);
//       return mtg
//     }
//   }
  
//   for (let i = 0; i < n ; i += 1) {
//     let m = cal.length;  
//     if (m === 0) {
//       cal.push(meetings[i])
//     } else {
//       let merge = compare(cal[m-1], meetings[i])
//       if (merge) {
//         cal[m-1] = merge
//       } else {
//         cal.push(meetings[i])
//       }
//     }
//   }
//   return cal.sort( (a,b) => a.startTime - b.startTime);
// }


















// // Tests

// let desc = 'meetings overlap';
// let actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]);
// let expected = [{ startTime: 1, endTime: 4 }];
// assertArrayEquals(actual, expected, desc);

// desc = 'meetings touch';
// actual = mergeRanges([{ startTime: 5, endTime: 6 }, { startTime: 6, endTime: 8 }]);
// expected = [{ startTime: 5, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = 'meeting contains other meeting';
// actual = mergeRanges([{ startTime: 1, endTime: 8 }, { startTime: 2, endTime: 5 }]);
// expected = [{ startTime: 1, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = 'meetings stay separate';
// actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }]);
// expected = [{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = 'multiple merged meetings';
// actual = mergeRanges([
//   { startTime: 1, endTime: 4 },
//   { startTime: 2, endTime: 5 },
//   { startTime: 5, endTime: 8 },
// ]);
// expected = [{ startTime: 1, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = 'meetings not sorted';
// actual = mergeRanges([
//   { startTime: 5, endTime: 8 },
//   { startTime: 1, endTime: 4 },
//   { startTime: 6, endTime: 8 },
// ]);
// expected = [{ startTime: 1, endTime: 4 }, { startTime: 5, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = 'sample input';
// actual = mergeRanges([
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 5 },
//   { startTime: 4, endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9, endTime: 10 }, 
// ]);
// expected = [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ];
// assertArrayEquals(actual, expected, desc);

// function assertArrayEquals(a, b, desc) {
//   const arrayA = JSON.stringify(a);
//   const arrayB = JSON.stringify(b);
//   if (arrayA !== arrayB) {
//     console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`)
//   } else {
//     console.log(`${desc} ... PASS`);
//   }
// }