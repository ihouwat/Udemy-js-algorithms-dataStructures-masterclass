// This is an undirected graph
class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        // If this were a directed graph, just go from vertex1 to vertex2
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex){
        this.adjacencyList[vertex].forEach(adjacentVertex => this.removeEdge(vertex, adjacentVertex));
        delete this.adjacencyList[vertex];
        // Another method
//         while(this.adjacencyList[vertex].length){
//             const adjacentVertex = this.adjacencyList[vertex].pop();
//             this.removeEdge(vertex, adjacentVertex);
//         }
    }
    depthFirstRecursive(start){
        let result = [];
        let visisted = {};
        const adjacencyList = this.adjacencyList; // '.this' context changes inside of helper function
        (function DFS(vertex){
            if(!vertex) return null; // base case
            visisted[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visisted[neighbor]){
                    return DFS(neighbor);
                }
            });
        })(start) // self invoking function
        return result;
    }
    depthFirstIterative(start){
        let stack = [start];
        let visited = [];
        let result = [];
        let currentVertex

        visited[start] = true;
        while(stack.length){
            console.log(stack)
            currentVertex = stack.pop();
            result.push(currentVertex);
            
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
    breadthFirst(start){
        let queue = [start];
        let visited = [];
        let result = [];
        let currentVertex

        visited[start] = true;
        while(queue.length){
            console.log(queue)
            currentVertex = queue.shift();
            result.push(currentVertex);
            
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

// ONE IMPLEMENTATION
// let flights = new Graph();
// flights.addVertex("Tokyo");
// flights.addVertex("San Fransisco")
// flights.addVertex("Sao Paulo")
// flights.addVertex("Aspen")
// flights.addEdge("Tokyo", "Sao Paulo")
// flights.addEdge("San Fransisco", "Aspen")
// flights.addEdge("San Fransisco", "Tokyo")
// flights.addEdge("San Fransisco", "Sao Paulo")
// flights.removeVertex("San Fransisco")

g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");

//        A
//      /   \
//     B     C 
//     \     /
//      D---E
//      \   /
//        F
