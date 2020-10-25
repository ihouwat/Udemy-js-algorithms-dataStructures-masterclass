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
    autocomplete(prefix, words = [], index = 0){
        // First have to find if the prefix sequence of letters is in our trie
        let current = this.characters;
        while(index < prefix.length - 1){
            if(!current[prefix[index]]) return undefined;
            current = current[prefix[index]].characters;
            index++;
        }
        let currentWord = prefix;
        current = current[prefix[index]];

        function helper(words, currentWord){
            if(current.isWord) words.push(currentWord);
                for (let letter in current.characters){
                let nextWord = currentWord + letter;
                current = current.characters[letter] // Here is the problem, how to make sure state returns to branching point
                helper(words, nextWord);
            }
        }
        if(current.isWord) words.push(currentWord);
        helper(words, currentWord)
        return words;
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
// t.characters.f.characters.a.characters.t.isWord
// t.characters.f.characters.a.characters.t.characters.e.isWord

// t.removeWord('argue')
// t.characters.f.characters.r

t.autocomplete('fa')