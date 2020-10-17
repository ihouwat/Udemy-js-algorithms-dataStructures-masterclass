console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []
// 1. Understand the problem
// i take a function with a number argument and an integer to return. 
// Return an array containing repetitions of the number argument. 
// If the number argument is negative, return an empty array

// 2. Explore concrete examples
// See above

// 3. Break it down
// replicate(3, 5)
// [5,5,5]  rep = 3
//     [5,5]    rep = 2
//         [5]  rep = 1
//                 []  rep = 0

// what are we making smaller on each recursive step: the repetitions
// the base case is 0 repetitions

function replicate(rep, num) {
   let newArray = []
   if (rep <= 0 ) { return newArray }
   newArray.push(num)
   return newArray = newArray.concat(replicate(rep-1, num))
}