// Given an unsorted array of integers and a number n, find if there is a pair of values in the array
// whose difference is n. If the pair exists, return true. If not, return false.
// findPair([6,1,4,10,2,4], 2) // true
// findPair([4,-2,3,10], -6) // true
// findPair([]) // false
// findPair([-4,4], 8) // true
// findPair([-4,4], -8) // true


function findPair(arr, num){
    if(!arr.length) return false; // edge case where array is empty
    let j;
    for (let i = 0; i < arr.length-1; i++){
        j = i+1;
        do{
            if((arr[i] - arr[j] === num) ||(arr[j] - arr[i] === num)) return true;
            j++;
        }
        
        while(j < arr.length-1);
    }

    return false;

}

findPair([6,1,4,10,2,4], 2) // true