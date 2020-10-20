// Node
// piece of data - val
// reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val)
        // If list is empty, set the head and tail to be the new node
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            // The current tail's 'next' property points to the new node
            this.tail.next = newNode;
            // Update the tail to point to the new node
            this.tail = newNode;
        }
        // Increment list length
        this.length++
        return this // Return list 
    }
    pop(){
        // If no nodes, return undefined
        if(this.length === 0) return undefined
        
        let current = this.head;
        let newTail = current;
        // Traverse the list as long as there is a current.next
        while(current.next){
            newTail = current; // new tail always lags behind current
            current = current.next;
        }
        // Once the loop is done, we have identified the tail and the preceding node
        // Assing a new tail
        this.tail = newTail;
        // Sever link to old tail
        this.tail.next = null;
        this.length --;
        //If list is empty, reset head and tail
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current
    }
    shift(){
        // If no nodes, return undefined
        if(this.length === 0) return undefined
        // Identify current head
        let removedHead = this.head;
        // Do the shift
        this.head = removedHead.next;
        this.length--
        //If list is empty, reset head and tail
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return removedHead
    }
    unshift(val){
        let newNode = new Node(val);
        // If there is no head, set the head and tail to be the newly created node
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            // Set the newly create node’s next property to be the current head property on the list
            newNode.next = this.head;
            // Set the head property on the list to be that newly created node
            this.head = newNode;
        }
        this.length++;
        return this
    }
    get(index){
        // If the index is less than zero or greater than or equal to the length of the list, return null
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        // Loop through the list until you reach the index and return the node at that specific index
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current
    }
    set(index, val){
        // Find the desired node, using the get method
        let foundNode = this.get(index);
        // If a node is found replace the value with the new one
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        // If a node is not found, return false
        return false;
    }
    insert(index, val){
        // If the index is less than zero or greater than the length, return false
        if(index < 0 || index > this.length) return false;
        // If the index is the same as the length, push a new node to the end of the list
        if(index === this.length) return !!this.push(val); // double 'not' returns the boolean true
        // If the index is 0, unshift a new node to the start of the list
        if(index === 0) return !!this.unshift(val);
        
        // Otherwise, using the existing get method, access the node at (index - 1)
        let newNode = new Node (val);
        let prev = this.get(index - 1);
        // Set the next property on that node to be the new node 
        // AND Set the next property on the new node to be the previous next
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;

        this.length++;
        return true;
    }
    remove(index){
        // If index less than 0 or greater than length of list, return undefined
        if(index < 0 || index >= this.length) return undefined;
        // If index at end of list, pop
        if(index === this.length - 1) return this.pop();
        // If index at beginning of list, shift
        if(index === 0) return this.shift();
        // Otherwise, get the (index - 1) node 
        let previousNode = this.get(index - 1);
        let removedNode = previousNode.next;
        // Set the next property of the (index - 1) node to be the next of the next node
        previousNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }
    reverse(){
        // Create a variable called node and initialize it to the head property
        let node = this.head;
        // Swap the head and tail
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for(let i = 0; i < this.length; i++){
            // Set next to be the next property on whatever node is
            next = node.next;
            // Set the next property on the node to be whatever prev is
            node.next = prev;
            // Set prev to be the value of the node variable
            prev = node;
            // Set the node variable to be the value of the next variable 
            node = next;
        }
        return this;
    }
    rotate(num){
        // function to rotate the nodes by some number passed in. Num can be any integer
        // if list is 1 - 2 - 3 - 4 - 5, and you rotate by 2, the list becomes 3 - 4 - 5 - 1 - 2. 
        // if list is 1 - 2 - 3 - 4 - 5, and you rotate by -1, the list becomes 5 - 4 - 3 - 2 - 1.

        // Edge case where there are no list items
        if(this.length === 0) return undefined;
        // Edge case where list does not need to rotate
        if(Math.abs(num % this.length) === 0) return this;

        let iterations;
        let counter = 0;
        let oldTail = this.tail;
        let current = this.head;
        let newTail = current;
        
        // Determining iterations for loop. Use of modulo ensures we don't traverse the list more than once
        if (num > 0) {
            // if num is positive
            iterations = Math.abs(num % this.length);
        } else {
            // if num is negative
            iterations = (num % this.length) + this.length;
        }

        while(counter < iterations){
            newTail = current; // new tail always lags behind current
            current = current.next;
            counter++;
        }
        
        // Sever the connection with the old tail
        newTail.next = null;
        // Have the old tail point to the current head
        this.tail.next = this.head;
        // Set the new tail;
        this.tail = newTail;
        // Set the new head;
        this.head = current;
        return this;
    }
    // Short method to see the list in the order it is in
    print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr)
    }
}

let list = new SinglyLinkedList()

list.push(5)
list.push(10)
list.push(15)
list.push(20)
list.push(25)
// list.reverse()
list.rotate(-2)
list.print()
