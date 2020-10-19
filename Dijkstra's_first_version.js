class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

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
                    console.log(smallest, distances[smallest], nextNode, distances)
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
        console.log(distances, distances['D'])
        return path.concat(smallest).reverse();
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