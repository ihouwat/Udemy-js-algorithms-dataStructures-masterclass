// function binarySearch(arr, val){
//     let left = 0;
//     let right = arr.length-1;
//     while (left <= right) {
//         let middle = Math.floor((right + left) / 2);
//         if (arr[middle] === val) return middle;
//         if (arr[middle] < val) {
//             left = middle + 1;
//         } 
//         else if (arr[middle] > val) {
//             right = middle - 1;
//         }
//     }
//     return -1; // if search reaches end of the array and doesn't find match
// }

// Refactored Instructor Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([1,2,4,8,10,15,26,29,48,58,67,74,80,92,100], 92)