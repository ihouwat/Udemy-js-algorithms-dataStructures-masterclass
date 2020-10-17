class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(val){
        // create node
        let newNode = new Node(val);
        // if no root, root is new node
        if(!this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        // If there is a root, traverse tree
        while(true){
            // If there is a duplicate, do not insert
            if(val === current.value) return undefined;
            // If val > then tree node
            if(val > current.value){
                // If there is no right child, new node is that child
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                } 
                // Else move on to the right child and repeat steps
                current = current.right;
            }
             else{
                 // If there is no left child, new node is that child
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                // Else move on the the left child and repeat steps
                current = current.left;
            }
        }
    }
    find(val){
        // If there is no root, return false
        if(this.root === null) return false;
        // Current and found variables
        let current = this.root;
        let found = false;
        // While we have not found a match and while there is a node
        while(current && !found){
            // If val is greater than node, move on the the right child and repeat steps
            if(val > current.value){
                current = current.right
            } 
             // If val is less than node, move on the the left child and repeat steps
            else if (val < current.value ) {
                current = current.left
            }
            // Else if there is a match return true
            else {
                found = true;
            }
        }
        // If there is no match after the loop is done, return false
        if(!found) return false;
        return current;
    }
    // Breadth-first Search
    BFS(){
        let queue = [],
            data = [],
            node = this.root;

        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder(){
        let data = [];
        let current = this.root;
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current)
        return data;
    }
    DFSPostOrder(){
        let data = [];
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }
    DFSInOrder(){
        let data = [];
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.insert(0)
tree.insert(2)
tree.insert(20)
tree.insert(40)
tree.insert(25)
tree.insert(15)
tree.insert(1)
tree.insert(12)
tree.insert(12) // returns undefined since value is a duplicate
// tree.find(0) // true
// tree.find(12) // true
// tree.find(22) // false