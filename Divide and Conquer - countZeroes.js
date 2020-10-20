// Given an array of 1s and 0s which has all 1s followed by 0s, 
//write a function that returns all 0s in the array

// Iterative solution
function countZeroes(arr){
    let min = 0;
    let max = arr.length - 1;
    while(min <= max){
        let middle = Math.floor((min + max)/2);
        
        // If middle is 1 and the index after it is 1, bring the min up 
        if(arr[middle] === 1 && arr[middle + 1] === 1){
            min = middle+1;
        }
        // If middle is 0 and the index before it is 0, bring the max down
        else if(arr[middle] === 0 && arr[middle - 1] === 0){
            max = middle-1;
        }
        // If middle is 1 and the index after it is 0, return the number of 0s
        else if(arr[middle] === 1 && arr[middle + 1] === 0){
            return arr.length-(middle + 1);
        }
        // If middle is 0 and the index before it is 1, return the number of 0s
        else if (arr[middle] === 0 && arr[middle - 1] === 1){
            return arr.length-(middle);
        }
        // If middle is 0, that means we reached the end of our divide and counquer, and all indexes are 0s
        else if (middle === 0){
            return arr.length
        }
    }
}

// Recursive solution
function countZeroes(arr){
  if(arr[arr.length - 1] === 1 || !arr.length) return 0; //if last index is 1, or array is empty, return 0
  if(arr[0] === 0) return arr.length; // if first index is 0, that means all elements are 0
  // recursive solution where you divide array in halves and add the length
  return  countZeroes(arr.slice(0, Math.floor(arr.length/2))) +
  countZeroes(arr.slice(Math.floor(arr.length/2)));
}


countZeroes([1,1,1,1,0,0,0,0,0,0,0,0])