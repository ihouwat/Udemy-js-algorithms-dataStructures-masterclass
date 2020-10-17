//  Step 1. Understand the Problem
// Can I restate the problem in my words? Comparing two strings, check if the characters in the first string all appear in the second string, in the same order
// What are the inputs that go into the problem? Inputs are two strings
// What are the outputs that should come from the solution to the problem? The output is a boolean. True if the characters from string #1 are found in string #2.
// Can the outputs be determined from the inputs? Yes
// How should I label the important pieces of data that are a part of the problem?
    // function isSubsequence(str1, str2)
//     i = pointer on string 1
//     j = pointer on string 2
//     Loop on length of string j

// 2. Explore Concrete Examples
// Simple cases

// isSubsequence('hello', 'hello world') // true
// isSubsequence('sing', 'sting') // true
// isSubsequence('abc', 'abracadabra') // true
// isSubsequence('abc', 'acb') // false
// isSubsequence('abc', 'ab') // false

// 3. Break It Down
// if string 2 is shorter than string 1, return false. If type of arguments is not string, return false
// create pointers i = 0 (which will track str1)
// for loop through each character of str2 (with j)
//     if i+1 === length of string 1, we've arrived and return true
//     else if the characters str1[i] and str2[j] match: i++
// if the loop ends without returning true, return false.
          

// Step 4. Solve/Simplify
function isSubsequence(str1, str2) {
    // if string 2 is shorter than string 1, return false. If type of arguments is not string, return false
    if(typeof(str1) !== "string" || typeof(str2) !== "string" || str1.length > str2.length) {
        return false;
    }
    let i = 0;
    for (let j=0; j < str2.length; j++) {
        if ((i + 1) === str1.length) {
            return true;
        }
        else if(str2[j] === str1[i]) {
            i++;
        }
     }
    return false;
}

// isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}


// isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'sting') // true
// isSubsequence('abc', 'abracadabra') // true
// isSubsequence('abc', 'acb') // false
// isSubsequence('abc', 'ab') // false
