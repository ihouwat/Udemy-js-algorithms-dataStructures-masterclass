// 1. UNderstand the problem
// is there a pair of values in a sorted array that gives us an average number that matches a target number?
// inputs: an array of sorted integers
// outputs: boolean - true if there is a match
// Labels: function averagePair(arr, num)
//            i index at start of array
//            j index at end of array

// 2. Explore concrete examples
// averagePair([1,2,3], 2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19], 2.5) // true
// averagePair([-1,0,3,4,5,6], 4.1) // true
// averagePair([], 4) // false

// 3. Break it down
// if array is empty, return false
// i = 0
// j = array.length / 2
// if (arr[i] + arr[j]) / 2 < num then index j + 1
// if (arr[i] + arr[j]) / 2 > num, then index j - 1
// else return true
// if arr[i] and arr[j] cross each other, return false

function averagePair(arr, num) {
    if(arr.length === 0) { return false }
    let i = 0;
    let j = arr.length - 1;

    do {
        if ((arr[i] + arr[j]) / 2 === num ) {
            return true;
        }
        else if((arr[i] + arr[j]) / 2 < num) {
            i++;
        }
        else if ((arr[i] + arr[j]) / 2 > num) {
            j--;
        }
    }

    while (arr[i] <= arr[j])

    return false;
}



// averagePair([1,2,3], 2.5) // true
averagePair([1,3,3,5,6,7,10,12,19], 8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // true
// averagePair([], 4) // false