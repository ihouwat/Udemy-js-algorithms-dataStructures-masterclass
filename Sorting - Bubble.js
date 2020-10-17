// Bubble sort: a sorting algorithm where the largest values bubble up to the top on each pass through an array
// Pseudocode:
// Start looping from a variable called i the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j+1] swap those two values!
// Return the array.


function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--){
//         console.log(arr[i])
        for (let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                // SWAP VALUES
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}


bubbleSort([37, 45, 29, 8])