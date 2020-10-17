// Improved hash example that works on strings only
function hash (key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31; // Prime number length array reduces collisions
    for (let i = 0; i < Math.min(key.length, 100); i++){ // Math.min here means we loop maximum 100 characters
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}