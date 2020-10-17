// 1. Understand the Problem
// Take a number and add all the numbers from 0 up to it
// Inputs: positive integers
// Outputs: addition of all the recursive addition operations
// Labels: recursiveRange(num)

// 2. Explore concrete examples
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

// recursiveRange(6) // 21
//  6 + recursiveRange(5) returns 21
//     5 + recursiveRange(4) returns 15
//       4 + recursiveRange(3) returns 10
//        3 + recursiveRange(2) returns 6
//         2 + recursiveRange(1) returns 3
//          1 + recursiveRange(0) returns 1
//             recursiveRange(0) returns 0

// 3. Break it down
// num + recursiveRange(num-1)
// base case is if(num === 0) return 0

function recursiveRange(num) {
    if(num === 0) return 0; // Base case
    return num + recursiveRange(num - 1);
}

recursiveRange(6) // 21
// recursiveRange(10) // 55 