// 1. Understand the Problem
//If I have two positive integers, do they have the same number of digits? Are they the same length?
//Inputs: two positive integers
//Outputs: boolean
//Labeling: function sameFrequency (num1, num2)

// 2. Explore Concrete Examples
// sameFrequency(1, 12) is false
// sameFrequency(12, 12) is true
// sameFrequency(2, 22) is false
// sameFrequency(35791, 19753) is true
// sameFrequency(-1, 1) is false
// sameFrequency(333, 333) is true


// 3. Break it Down
// Check if both integers are > 0. If one is not, return null. 
// Check if both integers have the same number of digits. If not, return null.
// Create lookup object. Loop over num1 and add each alphanumeric number (key) and frequency (value)
// Loop over num2, comparing it to the lookup object. if there is a match, value of that key -1. If there is no match return false. 
// Return true

// 4. Solve

function sameFrequency(num1, num2) {
    //Check if both integers are positive and same length
    if(((num1 || num2) < 0) || (num1.toString().length !== num2.toString().length)) {
        return false
    }

    let lookup = {}
    
    // Create object with all integers in num1
    for (let integer of num1.toString()) {
        lookup[integer] ? lookup[integer] ++ : lookup[integer] = 1
    }

//     Compare num2 with the lookup object
    for (let integer of num2.toString()) {
        if (lookup[integer]) {
            lookup[integer] --;
        } else {return false}
    }

    return true
}

sameFrequency(11112, 11112)