const {performance} = require('perf_hooks'); // required to define performance

const nemo = ['nemo']; // an array that contains the string nemo
const everyone = ['dory', 'gill', 'dorlin', 'nigel',
  'squirt', 'darla', 'hank', 'bloat', 'nemo'];
const large = new Array(100).fill('nemo');

function findNemo(array) {
  let t0 = performance.now(); // determines the performance of the loop
  for(let i = 0; i < array.length; i++) {
    if(array[i] === 'nemo') {
      console.log("found nemo");
    }
  }
  let t1 = performance.now(); // end timer to look for performance
  console.log('Call to find nemo took ' + (t1 - t0))
}

findNemo(nemo);
findNemo(everyone);
findNemo(large);

/*
Notes:
- For loops in JavaScript are led by the key word let
- There is automatic type assignment
- = assigns values
- == checks equality between two variables irrespective of the data type
- === checks equality with type in mind
- function is the key word for starting a method

 */