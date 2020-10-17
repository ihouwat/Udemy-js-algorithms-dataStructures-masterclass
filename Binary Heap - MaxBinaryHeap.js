class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element)
        this.bubbleUp();
    }
    bubbleUp(){
        //Current index is last item in array
        let idx = this.values.length - 1;
        // identify element that was pushed
        let element = this.values[idx];
        while(idx > 0){
            // find parent of element
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            // if element smaller than parent, break
            if(element <= parent) break;
            // Else swap parent and element
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            // move the index pointer to the parent and redo loop
            idx = parentIdx
        }
    }
    extractMax(){
        let max = this.values[0];
        let end = this.values.pop(); // Remove last element
        if(this.values.length > 0){
            this.values[0] = end; // Make last element the new root
            // trickle down
            this.sinkDown();
        }

        return max;
    }
    sinkDown(){
        let idx = 0;
        let length = this.values.length;
        let element = this.values[0];
        while(true){
            // Identify right and left children
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            // If left child within bounds of array
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                // if left child larger than current element
                // swap with left child
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }

            // If right child within bounds of array
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                // If left child was not larger than element
                // OR both children are larger, but right child is largest
                // swap with right child
                if(
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            // If no swaps were made, break the loop
            if(swap === null) break;
            // Make the swap
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            // Reset the index to continue loop
            idx = swap;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
// [41,39,33,18,27,12]
//  0  1  2  3  4  5
