class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }
    addWord(word, index = 0) {
        if(word.length === 0) return null;
        if(index === word.length) this.isWord = true;
        else if (index < word.length){
            //Define letter
            let letter = word[index];
            // Next node is either the next letter or a new Node
            let nextNode = this.characters[letter] || new Trie();
            // Recursively call function on next letter
            nextNode.addWord(word, index+1);
            // Set the current letter node to point to the next letter node
            this.characters[letter] = nextNode;
        }
        return this;
    }
    findWord(word, index = 0) {
        if(word.length === 0) return null;
        let current = this.characters;
        while(index < word.length - 1){
            if(Object.keys(current).length === 0 || !current[word[index]]) return undefined;
            current = current[word[index]].characters;
            index++;
            }
        if(current[word[index]] && current[word[index]].isWord){
            return current[word[index]];
        } else return undefined;
    }
    getWords(words = [], currentWord = ""){
        if(this.isWord) words.push(currentWord);
        for (let letter in this.characters){
            let nextWord = currentWord + letter;
            this.characters[letter].getWords(words, nextWord);
        }
        return words;
    }
    removeWord(word, index = 0){
        if(word.length === 0) return null; // If no word argument, return null
        let current = this.characters;
        // Loop through characters
        while(index < word.length - 1){
            // If we reach a letter without children, the word is not in our trie
            if(Object.keys(current).length === 0 || !current[word[index]]) return undefined;
            // If a letter has one child, it means it doesn't share words and you can delete all children
            if(Object.keys(current[word[index]].characters).length === 1) {
                delete current[word[index]];
                return this;
            } 
            current = current[word[index]].characters;
            index++;

            }
        // If we finish the loop and the current letter is the end of a word, change to false
        if(current[word[index]] && current[word[index]].isWord){
            current[word[index]].isWord = false;
        } else return undefined;
    }

    // My first autoComplete solution using helper recursive method. Long solution, meh
//     autoComplete(prefix, words = [], index = 0){
//         let queue = [];
//         let nextChar = "";
//         let current = this.characters;
//         let prev;
//         // First have to find if the prefix sequence of letters is in our trie
//         while(index <= prefix.length - 1){
//             if(!current[prefix[index]]) return words; // Return empty array if no autoComplete
//             prev = current;
//             current = current[prefix[index]].characters;
//             index++;
//         }
//         // Set current location at last index of prefix string
//         let currentWord = prefix;
//         current = prev[prefix[index-1]];
//         if(current.isWord) words.push(currentWord);
//         // Push each child node of current into queue
//         Object.entries(current.characters).forEach(val => queue.push(val));

//         function helper(queue, currentWord, nextChar){
//             while(queue.length > 0) {
//                 //while queue add progressively to current word and check for further children
//                 currentWord += nextChar
//                 let letter = queue.pop();
//                 if(letter[1].isWord) words.push(currentWord.concat(letter[0]));
//                 if(Object.keys(letter[1].characters).length > 0){
//                     Object.entries(letter[1].characters).forEach(char => {
//                         let newQueue = [char]
//                         helper(newQueue, currentWord, letter[0])
//                     });
//                 }
//             }
//         }
//         helper(queue, currentWord, nextChar)
//         return words;
//     }

    // My favorite autoComplete solution, from another student that uses the built-in getWords method
//     autoComplete(prefix) {
//         const words = []

//         let trie = this

//         for (let char of prefix) {
//           trie = trie.characters[char]

//           if (!trie) {
//             break
//           }
//         }

//         if (trie) {
//           trie.getWords(words, prefix)
//         }

//         return words
//       }

    // Another elegant autoComplete recursive solution that relies on traversing to the 
    // prefix's last node and starting getWords method from that location
//      autoComplete(prefix, ind = 0) {

//             if (ind < prefix.length) {
//                 try {
//                   return this.characters[prefix[ind]].autoComplete(prefix,ind + 1)
//                 } catch (TypeError) {
//                   return []
//                 }
//             }

//             return this.getWords([],prefix)

//         }

    // My refactored solution that relies on getWords() method
    autoComplete(prefix, words = [], index = 0){
        let current = this;
        // First have to find if the sequence of letters in the prefix input exists in our trie
        while(index < prefix.length){
             // Return empty array if no autoComplete
            if(!current.characters[prefix[index]]) return words;
            current = current.characters[prefix[index]];
            index++;
        }
        // Use getWords method, starting with current node
        current.getWords(words, prefix) 
        return words
    }
}

let t = new Trie();
t.addWord('fun');
t.addWord('fast');
t.addWord('fat');
t.addWord('fate');
t.addWord('father');
t.addWord('forget');
t.addWord('awesome');
t.addWord('argue');
// t.getWords();
// t.removeWord('fat')
// t.characters.f.characters.a.characters.t.isWord // false
// t.characters.f.characters.a.characters.t.characters.e.isWord // true

// t.removeWord('argue')
// t.characters.a.characters.r // undefined

// t.autoComplete('fa') // ["fat", "fate", "father", "fast"]
// t.autoComplete('a') //  ["argue", "awesome"]
// t.autoComplete('arz') // []