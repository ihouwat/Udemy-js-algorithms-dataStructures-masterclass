// 1. Understand the problem
// Look at a string and find the length of the longest substring with distinct characters
// Inputs are a string per function call. String are all lowercase and only include letters
// Outputs: integer denoting the length of the longest substring
// Label important data:
//     function findLongestSubstring(str)
//     end: end of sliding window which also reaches the end of the entire string to stop the loop
//     maxLength: stores the integer for longest substring
//     charArray: store characters
//     Methods needed: string.charCodeAt() to identify characters / perhaps str.charAt to identify index of a character
// 2. Explore concrete examples
// findLongestSubstring('') //0
// findLongestSubstring('rithmschool') //7
// findLongestSubstring('thisisawesome') //6
// findLongestSubstring('thecatinthehat') //7
// findLongestSubstring('bbbbbb') //1
// findLongestSubstring('longestsubstring') //8
// findLongestSubstring('thisishowwedoit') //6

// 3. Break it down
// End starts at index 0
// maxLength starts at 0
// while end index hasn't reached end of string
// if array does not contain duplicate characters
//     end moves up by one, adds character code to array
// if there are duplicate characters
//     update maxLength if the length of the array is larger than current maxLength
//     find index of first duplicate character in array
//     slice method on array to start from the letter following the duplicate
// once the while loop ends, return the largest subArray length

// 4. Solve and simplify
function findLongestSubstring(str) {
    let end = 0;
    let maxLength = 0;
    let charArray = [] ;
    while (end < str.length) {
        if(!charArray.includes(str[end])){
            charArray.push(str[end]);
            end++;
        }
        else if (charArray.includes(str[end])) {
            maxLength = Math.max(charArray.length, maxLength);
            charArray = charArray.slice((charArray.indexOf(str.charAt(end)))+1);
        }
    }
    return  Math.max(charArray.length, maxLength);
}


// Instructor solution using Object. Pretty ingenious

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

findLongestSubstring('') //0
// findLongestSubstring('rithmschool') //7
// findLongestSubstring('thisisawesome') //6
// findLongestSubstring('thecatinthehat') //7
// findLongestSubstring('bbbbbb') //1
// findLongestSubstring('longestsubstring') //8
// findLongestSubstring('thisishowwedoit') //6