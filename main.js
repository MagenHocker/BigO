const {performance} = require('perf_hooks'); // required to define performance


console.log("--------------- Twitter Exercises ----------------------------");

// Return the first and last item in a list
// This should be an O(1) runtime to grab the first and last value
const array1 = ['hi', 'my', 'friend'];

// if array1 were a list[][] or 2d array it would be O(n^2) bc we have to loop
// through the array storing all of the arrays and the array that it is
// storing

console.log("--------------------- Space Complexity -----------------------");

// Space Complexity -- O(1)
// We don't take into account the input size only what's in the function
function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('booooo!')
  }
}


// Space complexity -- O(n) -> for the array that we created
function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n.length; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}


// log all pairs
// What is the runtime of this algorithm?
// O(n^2) -- because of the nested for loop
const boxes = [1, 2, 3, 4, 5];
function logPairs(array) {
  for(let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      console.log(array[i] + ", " + array[j]);
    }
  }
}

logPairs(boxes);

console.log("-------------------------------------------------------------");

const nemo = ['nemo']; // an array that contains the string nemo
const everyone = ['dory', 'gill', 'dorlin', 'nigel',
  'squirt', 'darla', 'hank', 'bloat', 'nemo'];
const large = new Array(100).fill('nemo');


// Runtime: O(n) --> Linear time
function findNemo(array) {
  let t0 = performance.now(); // determines the performance of the loop
  for(let i = 0; i < array.length; i++) {
    if(array[i] === 'nemo') {
      console.log("found nemo");
      break;
    }
  }
  let t1 = performance.now(); // end timer to look for performance
  console.log('Call to find nemo took ' + (t1 - t0));
}

//findNemo(nemo);
//findNemo(everyone);
//findNemo(large);

//const boxes = [0, 1, 2, 3, 4];
function logFirstTwoBoxes(array) {
  console.log(array[0]);
  console.log(array[1]);
}

logFirstTwoBoxes(boxes); // O(2) -- operations

/*
Notes:
- For loops in JavaScript are led by the key word let
- There is automatic type assignment
- = assigns values
- == checks equality between two variables irrespective of the data type
- === checks equality with type in mind
- function is the key word for starting a method

 */


/*
----------------------- Big O Exercises ---------------------------
 */

// What is the Big O of the below function?
// Answer: O(n) because of the single for loop
function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    //anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}


// What is the Big O of the below function?
// O(4 + 5n) ----> O(n)
function anotherFunChallenge(input) {
  let a = 5;
  let b = 10;
  let c = 50;
  for (let i = 0; i < input; i++) {
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;

  }
  for (let j = 0; j < input; j++) {
    let p = j * 2;
    let q = j * 2;
  }
  let whoAmI = "I don't know";
}