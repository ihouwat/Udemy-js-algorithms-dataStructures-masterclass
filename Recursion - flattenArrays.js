
// 1. Understand the Problem
// Inputs are an array of arrays that might have nested indexes.
// Return an array including all values and no nesting
// Labels: 
//     function flattenArray()
//     newArray = [] to push in all values. This is what we will return.

// 2. Explore concrete examples
// flattenArray([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flattenArray([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flattenArray([[1],[2],[3]]) // [1,2,3]
// flattenArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

// 3. Break it down
// Helper object to detect if the type of an index is a number or an array (remember, type of array is object).
// If type of index is a number, push into newArray. Else if type of index is array recursively search that array

// [1,2,[3,4,5]]

// [2,[3,4,5]]

// [[3,4,5]]

function flattenArray(arr){
 let newArray = [];

    function helper(helperInput) {
         if(helperInput.length === 0) { // if an array is empty, return
             return;
         } 

        if(typeof(helperInput[0]) === 'number') { // if index is a number, add to newArray
            newArray.push(helperInput[0]);
        } else{ 
            helper(helperInput[0]); // if index is array, examine  nested level
        }

        helper(helperInput.slice(1)); // if there is no nesting, go to the next index of the array
    }

    helper(arr);

    return newArray;

}


// flattenArray([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]

flattenArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]


