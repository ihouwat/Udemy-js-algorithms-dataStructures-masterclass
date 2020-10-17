// 1. understand the problem
// Take an array of strings, capitalize the first letter of each string
// Input: array of strings
// Output: array of strings with first letter of each capitalized
// Labels: 
//     function (capitalizeFirst)
//     newArray

// 2. Explore concrete examples
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

// 3. Break it down
// Create new array
// Look at each index and capitalize first letter
// Recursively go through array by removing indexes
// Base case is array empty

// 4. Solve and simplify

function capitalizeFirst(arr) {
    let newArray = [];

    if (arr.length === 0) return newArray; // Base case
    newArray.push(arr[0][0].toUpperCase() + arr[0].slice(1)); // Capitalize first letter of string and push to new array

    newArray = newArray.concat(capitalizeFirst(arr.slice(1))); // Repeat capitalization over next string

    return newArray;

}

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']