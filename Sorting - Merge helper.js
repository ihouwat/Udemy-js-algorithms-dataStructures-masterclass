// Merge helper for merge sort - Pseudocode

// While there are still values we haven’t looked at:
// If the value in the first array is smaller than the value in the second array, 
// push the value from the first array into our results and move on to the next value in the first array
// If the value in the first array is larger than the value in the second array, 
// push the value in the second array into our results and move on to the next value in the second array

// Once we exhaust one array, push in all remaining values from the other array.



function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    function insertRemainingIndexes(res, arr) {
        res.push(...arr)
    }

    // While either array has not been exhausted
    do {
        // Compare indexes, push the smaller value, and increment index
        if (arr1[i] < arr2[j]) results.push(arr1[i]), i++
        else results.push(arr2[j]), j++;
    }
    while (i < arr1.length && j < arr2.length);

    // Once one array has been exhausted, add remaining indexes to results array
    if (i === arr1.length) insertRemainingIndexes(results, arr2.slice(j))
    else if (j === arr2.length) insertRemainingIndexes(results, arr1.slice(i))
    
    return results;
}


// INSTRUCTOR SOLUTION: MORE WHILE LOOPS

// function merge(arr1, arr2) {
//     let results = [];
//     let i = 0;
//     let j = 0;

//     // While either array has not been exhausted
//     do {
//         // Compare indexes, push the smaller value, and increment index
//         if (arr1[i] < arr2[j]) results.push(arr1[i]), i++
//         else results.push(arr2[j]), j++;
//     }
//     while (i < arr1.length && j < arr2.length);

//     // Once one array has been exhausted, add remaining indexes to results array
//     while(i < arr1.length) {
//         results.push(arr1[i]);
//         i++;
//     }

//      while(j < arr2.length) {
//         results.push(arr2[j])
//         j++
//     }
    
//     return results;
// }

merge([1,10,50],[2,4,99,100])