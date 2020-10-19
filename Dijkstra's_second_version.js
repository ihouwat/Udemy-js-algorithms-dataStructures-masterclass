class WeightedGraph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node: vertex2, weight})
        this.adjacencyList[vertex2].push({node: vertex1, weight})
    }
    Dijkstra(start, finish){
        let distances = {};
        let nodes = new PriorityQueue();
        let previous = {};
        let path = []; // to return at end
        let smallest;
        // Build up initial state by assigning all the vertices to the various objects
        for(let vertex in this.adjacencyList){
            // If vertex is the 'start', set key to be the vertex with the value 0 in 
            // both distances and nodes objects
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } 
            // otherwise set key to be the vertex with value Infinity in both objects
            else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            // set key to be all vertices with value null
            previous[vertex] = null;
        }

//         While priority queue is not empty
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            // Dequeue a vertex from priority queue
            if(smallest === finish) {
                // We are done
                // Build path to return to end
                while(previous[smallest]){
                    path.push(smallest)
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    // KEY POINT: the distance value for any given key 
                    // is the cumulative distance from the start vertex
                    let candidateDistance = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidateDistance < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidateDistance;
                        // updating previous - how we got to nextNeighbor
                        previous[nextNeighbor] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidateDistance)
                    }
                }      
            }
        }
        return path.concat(smallest).reverse();
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

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
        // this.insertTime = Date.now(); // You can use this to compare siblings with similar priorities
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.Dijkstra("A", "E");

// ["A", "C", "D", "F", "E"]