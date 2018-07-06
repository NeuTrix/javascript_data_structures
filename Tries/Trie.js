class TrieNode {
  constructor({ value, parent = '' , level} = {})  {
    this.value = value;
    this.parent = parent;
    this.level = level;
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.rootNode = new TrieNode({value: '*',level: 2});
  }

  // convert word data to consistent format
  normalize(word) {
   return word.toLowerCase()
  }

  // insert a new word into the Trie instance
  // accept a single word or an array
  insert(word) {
    // clean the data, rest to lower case
    word = this.normalize(word);
    // set the root node
    let node = this.rootNode;
    // let level = 0;
    // build the children in root node
    for (let i = 0; i < word.length; i += 1) {
      let letter = word[i];
      // determine if node already exist and reset node if so
      if(node.children[letter]) {
        node = node.children[letter]
      // if not, then create new child node
      } else {
        let newNode = new TrieNode({letter: letter, parent: node.value});
        node.children[letter] = newNode;
      // reset to next node
        node = newNode
      }
    }
    node.endOfWord = true;
    let message = `\n ==> The word "${word}" was successfully added. \n`
    return message
  }

  // determine if a word exists in this Trie
  find(word) {
    word = this.normalize(word);
    let wrdArr = word.split('');
    // start at root
    let node = this.rootNode;
    // create string of found letters
    let found = "";
    // loop through the word; stop if failed
    for (let i = 0; i < wrdArr.length; i += 1) {
      let letter = wrdArr[i];
      let kid = node.children[letter];

      if (kid) {
        found += letter
        node = (kid)
      } else {
        console.log(`Failed. The word => ${word} <= was not found. \n Only found ["${found}..."].`)
        return false
      }
    }
    console.log(`Found the word: "${found}"`)
    return true
  }
  
  // remove a word from the Trie instance
  // !! how to remove a substring
  remove(word){
    word = this.normalize(word);
    let wordArray = word.split('');
    let n = wordArray.length
    let node = this.rootNode;
    // declare stacks and flags
    let nodeStack = []
    let letterStack = []
    let subseg = false;
    
    this.find(word)
    // reset the stacks and flags for next call
    const reset = () => {
      nodeStack.length = 0;
      letterStack.length = 0;
      subseg = false;
    }
    
    for (let i = 0; i < n; i += 1) {
      let letter = wordArray[i] // letter value to locate
      let kid = node.children[letter] // child obj of node
      let end = wordArray.indexOf(letter) === n - 1

      letterStack.push(letter)
      nodeStack.push(node)

      if (!kid && !end) {
        return console.log("word not found")
      } else if (end) {
        kid.endOfWord = false;
        // word flag to notify if subword is reached
        while ( nodeStack.length && !subseg ) {
          const N = nodeStack.pop();
          const L = letterStack.pop();
          delete N.children[L]
          // triggers end of while loop if subsegment reached
          if (N.endOfWord){
            subseg = true;

          // console.log(`==>Letters: ${letterStack} \n Nodes: `, nodeStack)
            
          }
        }
        reset() // reset flags and stacks
        console.log('at end ==>', subseg, letterStack, nodeStack)
      } else {
        // console.log('------->',kid.children)
        node = kid
      }  
    }
    this.display(this.rootNode)
    console.log( )
    
    return true
  }

  // provide visual display of the entire Trie instance
  display(node= this.rootNode) {
    // !!! not nesting properly in a tree format
    
    if(!node) {
      return console.error(("Error: There are no nodes in this Trie"))
    }
    let children = node.children; // children objects for this node

    for (let child in children) {
      let kid = children[child]; // single kid obj for this node
      let grands = kid.children
      let names = Object.keys(grands); // keys arr of the object set
      let count = names.length; // number of children for this node
      // highlight end of a completed word
      if ( kid.endOfWord === true) {
        console.log(`${child} * \n`)
      } else if (count >= 2) {
        // visually identify branches
        console.log(`${"-".repeat(this.indent)}${child} -->`, names)
      } else {
        console.log(child)
      } 
      this.display(kid)
    }
  }
}

module.exports = Trie