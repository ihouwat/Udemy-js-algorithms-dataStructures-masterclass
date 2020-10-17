function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    // Create frequency counter for first string
    const lookup = {}

    for(let letter of str1) {
        lookup[letter] ? lookup[letter]++ : lookup[letter] = 1
    }

    for(let letter of str2){
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}
