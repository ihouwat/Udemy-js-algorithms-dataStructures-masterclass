// Helper to get digits in a number
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
    // Math.abs turns negative numbers into positives
    // Math.pow finds the hundredths place of the integer. ie 10 to the power 1, or 2...
    // Process: 
//         divide the number by the hundredths place of the integer
//         then we floor the number to get rid of the decimal
//         then we mod 10, divide the number by 10 and return the remainder
}

getDigit(7323,1)

// Helper that takes a base 10 number and returns the number of digits
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
    // Math.abs works with negative numbers
    // Math.log10 returns base 10 logarithm of a number Ex: log10(10000) = 5 or 10^5 = 10000
    // Floor the number to remove the decmial.
    // Add 1 to get the right number of digits
}

digitCount(42)

// Helper that takes an array of numbers and returns the number of digits in the largest numbers in the list
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        // Run digitCount on each number in the array and update maxDigits if needed
        maxDigits = Math.max(maxDigits, digitCount(nums[i])) // Math.max returns the highest value of two numbers
    }
    return maxDigits
}

mostDigits([23, 567, 89, 1222344, 3])

getDigit(7323,3)