// given a sorted array and number, return the occurances of the number in the array
// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

function sortedFrequency(arr, num){
    let numCount = 0;

    function helper(array, num){
        // if last array element less than num, or array empty, or first element bigger than num, ignore
        if(array[array.length-1] < num || !array.length || array[0] > num) return;
        // if all elements match num, add array length to counter
        if(array[0] === num && array[array.length - 1] === num) return numCount = numCount + array.length;
        // recursion
        helper(array.slice(0, Math.floor(array.length/2)), num) + 
        helper(array.slice(Math.floor(array.length/2)), num);
    }
    // Initialize helper
    helper(arr, num);
    
    //If no matches found, return -1
    if (numCount === 0) return -1;
    return numCount;
}

sortedFrequency([1,1,2,2,2,2,3],4)