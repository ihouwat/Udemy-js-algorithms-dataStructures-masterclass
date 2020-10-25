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
}

let trie = new Trie();
trie.addWord('do');
trie.addWord('dot');
trie.addWord('dope');
trie.addWord('oops');
// trie.findWord('doe'); // undefined
trie.getWords();