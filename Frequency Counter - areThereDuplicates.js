// 1. Understand the problem
// Look into whatever variables are passed in the function and check for duplicates
// Inputs: whatever variables are given to us. It seems the arguments are only alphanumeric characters
// Output: boolean. True if there are duplicates
// Labels: function areThereDuplicates (args) 
//         lookup object

// 2. Concrete examples
// areThereDuplicates(1,2,3) // false
// areThereDuplicates(1,2,2) // true
// areThereDuplicates('a', 'b', 'c','a') // true
// areThereDuplicates() // false

// 3. Break it down
// Create a lookup object
// If there are no arguments, return false.
// Loop over arguments and add to the object. The value of each key is the frequency it appears.
// If one key already exists, return true. Else return false (all values are 1)


function areThereDuplicates() {
  let lookup = {};
  // If there are no arguments, return false.
  if (arguments.length === 0) {return false}
  
  for (var i = 0; i < arguments.length; i++) {
    if(!lookup[arguments[i]]) {
      lookup[arguments[i]] = 1;
    } else {
      return true;
    }
  }
  return false
}

// One liner solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
// areThereDuplicates(1,2,3) // false
// areThereDuplicates(1,2,2) // true
// areThereDuplicates('a', 'b', 'c','a') // true
// areThereDuplicates() // false