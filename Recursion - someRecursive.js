// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// 1. Understand the Problem
// Take an array and callback, and if one value in the array returns true when passed in the callback, return true
// Inputs: Array and a callback
// Output: boolean
// Do I have all the information: not really, have to try out different callbacks

// 2. Explore Concrete Examples
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// 3. Break it down
// Pure recursion method.
// Pass first index of array into callback
//     if it fails, remove first index from array and return the method recursively on the shorter array
//     return true if the condition is met 
//     base case: if array length is 0, return false


function someRecursive(arr, callback){
    
    if(arr.length === 0) return false; // if during recursion we never get a match, return false

    // If callback on array index is true, returns true, else move on to next index
    return callback(arr[0]) || someRecursive(arr.slice(1), callback);

}

// Instructor solution
// function someRecursive(array, callback) {
//     if (array.length === 0) return false;
//     if (callback(array[0])) return true;
//     return someRecursive(array.slice(1),callback);
// }

// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
someRecursive([11, 4,6,8], val => val > 10); // false
