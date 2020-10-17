function pivot(arr, start = 0, end = arr.length - 1) {
    let swapIdx = start;
    let pivot = arr[start]
    // Swap function
    function swapArrayElements(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    for (let i = start + 1; i <= end; i++) {
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

function quickSort(arr, left = 0, right = arr.length - 1){
//     If left is NOT less than right, we are looking at a subarray with one element 
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right); 
    }
    return arr;
}

quickSort([100,-3,2,4,6,9,1,2,5,3,23])