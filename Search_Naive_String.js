// Naive search: searching for substrings in a larger string
// PSEUDOCODE:
// Loop over the longer string
// Nested loop over the shorter string
// If characters don’t match, break out of the inner loop
// If characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count (if you don't find anything, counter returns 0)

// EXAMPLE: 
// naiveSearch('lorie loled', 'lol'): 2 'lol' in the longer string


function naiveSearch (long, short) {
    count = 0;
    for(let i=0; i < long.length; i++) {
        for(let j=0; j < short.length; j++) {
            if (short[j] !== long[i+j]) break;
            else if (j === short.length -1) {
                console.log('found a match');
                count ++;
            } 
        }
    }
    return count
}

naiveSearch('lorie loled', 'lol')