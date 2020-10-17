// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false


//1. Understand the problem: check if a string reads the same going forwards and backwards
// Inputs: string
// Output: boolean true or false
// Labels: function isPalindrome(str)
//         helper(): recursive method to check if string ends match

// 2. Explore Concrete Examples
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// 3. Break it down
// Take string
// Pass through helper method that checks if str[0] === str[str.length-1]
// If true, recursively check string each time, taking out the first and last letters
// If you reach to one or no letters left return true.
// Otherwise returns false

// 4. Solve

// Helper recursion method

// function isPalindrome(str){

//     let result = false; // stores boolean here

//     function helper(string) {
//         if (string.length <= 1) {
//             return result = true;
//         }
//         if (string[0] === string[string.length-1]) {
//             return helper(string.substr(1,(0 + string.length-2)));
//         } else {
//             return;
//         }
//     }

//     helper(str);

//     return result 
    
// }


// Pure recursion

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

isPalindrome('tacocat') // true
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
// isPalindrome('') //true
