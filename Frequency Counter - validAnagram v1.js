function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    // Create frequency counter objects
    const frequencyCounter1 = {}
    const frequencyCounter2 = {}

    // Add string characters to objects 
    // and counting each character's frequency
    for (let val of str1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1, frequencyCounter2)
    // Compare both objects to make sure keys and values are identical
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    return true
}
