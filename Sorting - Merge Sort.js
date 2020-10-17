// Merge helper
    function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    // While either array has not been exhausted
    do {
        // Compare indexes, push the smaller value, and increment index
        if (arr1[i] < arr2[j]) results.push(arr1[i]), i++
        else results.push(arr2[j]), j++;
    }
    while (i < arr1.length && j < arr2.length);

    // Once one array has been exhausted, add remaining indexes to results array
    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

     while(j < arr2.length) {
        results.push(arr2[j])
        j++
    }
    
    return results;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let left = arr.slice(0,Math.floor(arr.length/2));
    let right = arr.slice(Math.floor(arr.length/2));
    return merge(mergeSort(left),mergeSort(right));
    
}


// // INSTRUCTOR SOLUTION

// function mergeSort(arr) {
//     if(arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length/2) 
//     let left = mergeSort(arr.slice(0,mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, right);
    
// }

mergeSort([50,10,3,4,0,-1, 100])