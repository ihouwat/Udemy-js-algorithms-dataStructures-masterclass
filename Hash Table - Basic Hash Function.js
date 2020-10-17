// Simple hash example that works on strings only
function hash (key, arrayLen) {
    let total = 0;
    for (let char of key){
        // map "a" to 1,"b" to 2, "c" to 3, etc.
        let value = char.charCodeAt(0) - 96; //charCodeAt gives number. -96 gives position in alphabet
        total = (total + value) % arrayLen; // Modulo ensures total always falls within bounds of array length
    }
    return total;
}

// problems: 
// 1. only works with strings
// 2. not constant time due to looping over string characters
// 3. values be more distributed

