class Node {
  constructor(value = null) {
    this.value = value;
    this.parent = {};
    this.children = new Map();
    this.isWordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node('root');
  }

  insert(str = null, node = this.root, word = []) {
    if (!str) { // validation
      this.report(word.join(''))
      return word.join('')
    } 
    
    const kids = node.children; // node kids map
    const char = str[0]; // first character of remaining string
    word.push(char)

    // add to map if not currently included
    if (!kids.has(char)) { 
      kids.set(char, new Node(char));
    } 

    // settings for final character
    if (str.length === 1) {
      kids.get(char).isWordEnd = true;
    }
    
    // reduce word and recurse
    return this.insert(str.slice(1), kids.get(char), word)
  }

  // ========= HELPER METHODS =========
  report(word) {
    console.log(`\n${'='.repeat(40)} \n\tThe word "${word}" has been added!\n${'='.repeat(40)} \n `)
    console.log(this)
    console.log(`\n${'='.repeat(40)}`)
  }
}

module.exports = {Trie, Node}
