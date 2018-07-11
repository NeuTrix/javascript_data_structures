// ====> Task Rules <====
// - return an array of diff objects
// - diffs represent diffs vs object 1 only
// - only show cases where obj1 and obj2 don't share same value
// - path string grows as traversed in depth

// test objects
const movie1 ={
  id: 1,
  title: "Star Wars",
  year: 2014,
  // genres: ["sci-fi", "action"],
  ratings: {
    type: "fan",
    stars: 5,
    similar: [4],
    locations: {
      nearby: "Mountain View",
      far: "San Francisco"
    },
    justMovie1: "just SW"
  }
}

const movie2 = {
  id: 2,
  title: "Star Trek",
  year: 2014,
  genres: ["sci-fi", "action", "adventure"],
  ratings: {
    type: "critic",
    stars: 5, 
    similar: [1],
    bulleseye: 99 // should not show
  }
}

function movies (M1,M2){   
  let movieDiffs  = [ ]; // outer scope to avoid nesting 

  let diffObjs = (obj1, obj2, root="") => {

    let keys = Object.keys(obj1);
    let n = keys.length;
    // base case is the end of the for loop
    for (let i = 0; i < n; i += 1) {
      // constructs path based on root (if not empty)
      let path = !root ? keys[i] :`${root}.${keys[i]}`; 
      let ov = obj1[keys[i]]; //object 1 value
      let nv = !obj2[keys[i]] ? 'null' : obj2[keys[i]]; //object 2 value
      
      // process strings and arrays
      if ( ov !== nv 
          && (typeof ov !== 'object' || Array.isArray(ov))
        ) { 
          let diff = {
            path: path,
            oldvalue: ov,
            newValue: nv ? nv : 'null' // in case nv has no similar key
          }
          movieDiffs.push(diff)
       // singles out nested objects   
      } else if (typeof ov === 'object' && !Array.isArray(ov)) {
          diffObjs(ov,nv,path)
      }
    }
    // no return values.  results pushed to outer scope
  }
  //  run the sub program
  diffObjs(M1,M2)
  // return the result
  return movieDiffs
}

// ==== quick test to console
let test = movies(movie1, movie2)
console.log(test)
test.forEach(x => console.log(`==>`,x ,`\n`))
console.log("COUNT ===> ", test.length) // should be 7
