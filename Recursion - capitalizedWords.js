// 1. Understand the problem
// Take an array of words and return array of all words capitalized
// Input: array of strings
// Output: array of capitalized strings
// Labels: function capitalizedWords(arr)
// newArray = []

// 2. Explore concrete examples\
let words = ['i', 'am', 'learning', 'recursion'];
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// 3. Break it down
// toUpperCase method on each index (recursively)
// push each index into new array

// i, am, learning
//     am, learning
//         learning 

// 4. Solve and simplify

// // HELPER METHOD
// function capitalizeWords(arr) {
//     let newArray = [];
//     function helper(input) {
//         if(input.length === 0) { return}
//         newArray = newArray.concat(input[0].toUpperCase());
//         helper(input.slice(1));
//     }

//     helper(arr);

//     return newArray;
// }

// PURE RECURSION METHOD
// function capitalizeWords(arr) {
//     let newArray = [];
//     if(arr.length === 1) { return arr[0].toUpperCase() }
//     newArray = newArray.concat(arr[0].toUpperCase(), capitalizeWords(arr.slice(1)));
//     return newArray;
// }


// Instructor solution
function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
 
}