// Pseudocode
// Function accepts three arguments, an array, a start index, and an end index (these can default to 0 and array length minus 1, respectively)
// Grab the pivot from the start of the array (it doesn’t matter that it’s the first element)
// Store the current pivot index in a variable to keep track of where the pivot ends up
// Loop through the array from start to the end.
// If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
// Swap the starting element, the pivot with the pivot index
// Return the pivot index

function pivot(arr,start=0,end=arr.length) {
    let swapIdx = start;
    let pivot = arr[start]
    // Swap function
    function swapArrayElements(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    for (let i = start + 1; i < arr.length; i++) {
        // If the pivot is greater than the current element
        if (pivot > arr[i]) {
            // Increment pivot inded and swap current element with element at the pivot index
            swapIdx++
            swapArrayElements(arr,swapIdx,i)
        }
    }
    // Once the loop is done, swap the starting element with the pivot
    swapArrayElements(arr,swapIdx,start)
    return swapIdx
}

pivot([4,8,2,1,5,7,6,3])