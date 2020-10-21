// function accepts a rotated array of sorted numbers and an integer
// return the index of the integer in the array. If the value is not found, return -1
// findRotatedIndex([3,4,1,2], 4) // 1
// findRotatedIndex([6,7,8,9,1,2,3,4], 8) // 2
// findRotatedIndex([6,7,8,9,1,2,3,4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22], 14) // -1
// findRotatedIndex([6,7,8,9,1,2,3,4], 12) // -1
// findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16)// 5

function findRotatedIndex(arr, num){
    // First find pivot index where sorted array would usually start
    let pivotIndex;
    for(let i = 0; i < arr.length; i++){
        if(arr[i+1] < arr[i]){
            pivotIndex = i+1;
            break;
        } 
    }
    // Set 'middle' point to be the pivot
    let start = 0;
    let end = arr.length - 1;
    let middle = pivotIndex;
    
    // Perform binary search
    while(arr[middle] !== num && start <= end){
        if(arr[middle] === num) return middle;
        if(arr[middle - 1] >= num && arr[end] < num) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start+end)/2)
    }
    return arr[middle] === num ? middle : -1;
}

findRotatedIndex([6,7,8,9,1,2,3,4], 3) // -1
