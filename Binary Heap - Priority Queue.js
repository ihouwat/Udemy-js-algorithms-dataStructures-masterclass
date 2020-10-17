class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
        // this.insertTime = Date.now(); // You can use this to compare siblings with similar priorities
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority)
        this.values.push(newNode)
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
            if(element.priority >= parent.priority) break;
            // Else swap parent and element
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            // move the index pointer to the parent and redo loop
            idx = parentIdx
        }
    }
    dequeue(){
        let min = this.values[0];
        let end = this.values.pop(); // Remove last element
        if(this.values.length > 0){
            this.values[0] = end; // Make last element the new root
            // trickle down
            this.sinkDown();
        }

        return min;
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
                if(leftChild.priority < element.priority){
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
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
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

let ER = new PriorityQueue();
ER.enqueue("common cold", 5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever", 4)
ER.enqueue("broken arm", 2)
ER.enqueue("glass in foot", 3)
