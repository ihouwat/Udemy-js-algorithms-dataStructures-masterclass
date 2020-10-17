// Pseudocode
// Define a function that accepts a list of numbers
// Figure out how many digits the largest number has
// Loop from k=0 up to this largest number of digits
// For each interaction of the loop, inner loop:
    // Create buckets for each digit (0 to 9). (Array with subarrays for buckets)
    // Place each number in the corresponding bucket based on its kth digit
// Replace our existing array with values in our buckets, starting with 0 and going up to 9 (concat into new array)
// Return list at the end

// Helper that takes a base 10 number and returns the number of digits
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper that takes an array of numbers and returns the number of digits in the largest numbers in the list
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i])) // Math.max returns the highest value of two numbers
    }
    return maxDigits
}

// Helper to get digits in a number
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}


function radixSort(nums) {
    // Figure out how many digits the largest number has
    let maxDigitCount = mostDigits(nums);
    for(let k=0; k < maxDigitCount; k++) {
        // Create a bucket array with length 10 indexes. Each index is an empty array
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i=0; i < nums.length; i++) {
            //Place each number in the corresponding bucket based on its kth digit
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        // Replace our existing array with values in our buckets, starting with 0 and going up to 9 (concat into new array)
//         nums = [].concat.apply([], digitBuckets);
        // OR
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23,12,345,29000,5467,2345,9852,0])