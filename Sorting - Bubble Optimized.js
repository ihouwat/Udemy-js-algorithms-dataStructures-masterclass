//  Bubble Sort optimization: what if your array is already sorted but the algorithm is still going,
//   as it should. We can short circuit the function to check if a swap was made on the last pass. 
//   If not, it indicates our array is sorted and we can break the loops.

// OPTIMIZED VERSION TO BREAK THE LOOP 
function bubbleSort(arr) {
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true; // start by assuming no swaps were made
        for (let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                // SWAP VALUES
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false; //ensures the loop doesn't break
            }
        }
        if(noSwaps) break; // if true, we break out of the loop
    }
    return arr
}


bubbleSort([37, 45, 29, 8])