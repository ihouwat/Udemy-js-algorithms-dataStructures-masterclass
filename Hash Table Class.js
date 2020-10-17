class HashTable {
    constructor(size=53){
        this.keyMap = new Array(size);
    }
    _hash (key) {
        let total = 0;
        let WEIRD_PRIME = 31; // Prime number length array reduces collisions
        for (let i = 0; i < Math.min(key.length, 100); i++){ // Math.min here means we loop maximum 100 characters
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value){
        let index = this._hash(key);
        // using separate chaining to handle collisions
        // if there is no array at the index in the keyMap array
        if(!this.keyMap[index]){
            // create an array
            this.keyMap[index] = [];
        }
        // Push the key value pair as an array into the keyMap
        this.keyMap[index].push([key, value])
        return this;
    }

    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key) { // Look for first item of each subarray at that index
                    return this.keyMap[index][i][1] // Return the corresponding value, which is the second item of each subarray at that index
                }
            }
        }
        return undefined;
    }
    values(){
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    // Looking for duplicate values
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr;
    }
    keys(){
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    // Looking for duplicate keys
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr;
    }
}

let ht = new HashTable(17)
ht.set('hello world', "goodbye!!!")
ht.set('dogs', "are cool!!!")
ht.set('cats', "are fine")
ht.set('i love', "pizza")
ht.set('i hate', "pizza")
ht.get('dogs')