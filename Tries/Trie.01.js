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

  insert(str = null, node = this.root, memo = []) {
    if (!str) { // validation
      this.report(memo.join(''))
      return memo.join('')
    } 
    
    const kids = node.children; // node kids map
    const char = str[0]; // first character of remaining string
    memo.push(char); // populate memo memo

    // add to map if not currently included
    if (!kids.has(char)) { 
      kids.set(char, new Node(char));
    } 

    // settings for final character
    if (str.length === 1) {
      let charNode = kids.get(char)
      charNode.isWordEnd = true;
      console.log(`\nThe node for character "${char}" is set to "${charNode.isWordEnd}"`)
    }
    ads = 7
    

    // reduce memo and recurse
    return this.insert(str.slice(1), kids.get(char), memo)
  }

  // ========= HELPER METHODS =========
  report(memo) {
    console.log(`\n${'='.repeat(40)} \n ==> The word "${memo}" has been added!\n${'='.repeat(40)} \n `)
    console.log(this)
    console.log(`\n${'='.repeat(40)}`)
  }
}

module.exports = {Trie, Node}
