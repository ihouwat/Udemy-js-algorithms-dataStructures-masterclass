// Naive priority queue
// Due to sorting for every enqueue, Big O is O(N * log(N))
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

let q = new PriorityQueue();
q.enqueue("A",40);
q.enqueue("B",30);
q.enqueue("C",1);
q.enqueue("Z",10);
q.enqueue("W",0);