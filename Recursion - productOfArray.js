// 1. Understand the problem
// Multiply all the numbers in an array and return the result
// Labels: function productOfArray(arr)

// 2. Explore concrete examples
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// 3. Break it down
// If array is 0, return 0
// Multiply arr[0] * arr[0+1], slice than repeat
// Base case: if ![arr 0] return

// productOfArray([1,2,3,10])
// 1 * productOfArray(arr.slice(1)[0])
//  [2] * productOfArray(arr.slice(1)[0])
//      [3] * productOfArray(arr.slice(1)[0])
//          [10] * productOfArray(arr.slice(1)[0])
//              [] return 1

// productOfArray([1,2,3]) // 6
// 1 * productOfArray(arr.slice(1)[0])
    // 2 * productOfArray(arr.slice(1)[0])
        // 3 * productOfArray(arr.slice(1)[0])
//             [] return 1

function productOfArray(arr) {
    // Base case here
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

// productOfArray([1,2,3,10]) // 60
// productOfArray([1,2,3,10, 11])
productOfArray([1,2,3,0]) // 6
