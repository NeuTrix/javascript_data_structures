let chalk = require('chalk')

class TrieNode {
  constructor({level, parent = '', value} = {})  {
    this.value = value;
    this.parent = parent;
    this.level = level;
    this.children = {};
    this.endOfWord = false;
    // color for console highlighting
    this.color = false;
  }
}

class Trie {
  constructor() {
    this.rootNode = new TrieNode({ value: '*', level: 0 });
  }
  // insert a single string into the Trie instance
  insertString(word) {
    // clean the data, rest to lower case
    word = word.toUpperCase()
    // set the root node
    let node = this.rootNode;
    // build the children in root node
    for (let i = 0; i < word.length; i += 1) {
      let letter = word[i];
      // determine if node already exist and reset node if so
      if(node.children[letter]) {
        node = node.children[letter]
      // if not, then create new child node
      } else {
        let newNode = new TrieNode({
          value: letter, 
          parent: node.value,
          level: i
        });
        node.children[letter] = newNode;
      // reset to next node
        node = newNode
      }
    }
    node.endOfWord = true;
    let message = `\n ==> The word "${word}" was successfully added. \n`;
    return message
  }
  //  Insert an array of strings into the Trie
  insertArray(arr) {
    let inserted = [];

    if(arr.length <= 0) {
      console.error("Error: Can not insert an empty array")
      return false
    }
    arr.sort((a,b) => {return b - a})
    arr.forEach(word => this.insertString(word))
  }
  // Use to flag special cases or search results
  clearColorFlag(arr){
    // reset color flag to false. Clear for next search
    arr.forEach(node => node.color = false)
  }
  // determine if a word exists in this Trie
  find(word) {
    word = word.toUpperCase(); // normalize data
    let wordArray = word.split(''); // processing arr of search term
    let n = wordArray.length; // shorthand
    let node = this.rootNode; // start at root
    let found = ""; // create string of found letters
    let arr = [] // to hold nodes for post processing (reset)
    let failed = `Failed. The word =>${word}<= not found.` // msg 
    // loop through the word; stop if failed
    for (let i = 0; i < n; i += 1) {
      let letter = wordArray[ i ]; // single char for search
      let kid = node.children[ letter ]; // capture child node
      // validates that substring is a full word in Trie
      if(!kid) {
        console.log(failed) // produce error message
        return false
        // verify that last letter is end of word
      } else if ( i === n - 1 && kid.endOfWord == false) {
        console.log(failed) 
        return false
      } else {
        kid.color = true; // Set color flag to highlight found word
        found += letter; // add the letter to the return string
        node = (kid); // point to the new node header in the chain
        arr.push(node) // push the node into the arr for resetting
      } 
    }
    console.log(`Found the word: " ${found} "`)
    // this.display()
    this.print(arr[0])
    arr.forEach(node => {
      node.color = false;
      // return console.log(node)
    })
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
          }
        }
        reset() // reset flags and stacks
        console.log('at end ==>', subseg, letterStack, nodeStack)
      } else {
        node = kid
      }  
    }
    this.display(this.rootNode)
    return true
  }
  // recursively display all children for a node
  display(node= this.rootNode) {
    // !!! not nesting properly in a tree format
    if(!node) {
      return console.error(("Error: There are no nodes in this Trie"))
    }
    let children = node.children; // children objects for this node
    // console.log(chalk.cyan('====>Node: '),node)
    // console.log(chalk.yellow('====>Kids: '),children)
    // console.log(chalk.grey(node.value))
    for (let name in children) {
      let child = children[name]; // single child obj for this node
      let grands = child.children // grand children of this node
      let names = Object.keys(grands); // keys arr of the object set
      let count = names.length; // number of children for this node
      let indent = `${chalk.grey("| ").repeat(child.level )}` // level indicator
      // let indent = `${chalk.grey(child.value)} ${chalk.grey("| ").repeat(child.level )}` // level indicator
      // Word endings are highlightes with a period ('.').
      // let highlight = chalk.yellow;
      let highlight = chalk.yellow.bold.bgBlack;
      let parentCol = chalk.green;
      if ( child.endOfWord === true) {
        console.log(`${indent}${
          child.color ? 
          highlight(name): 
          (name) 
        } ${chalk.red('*')}`)
      } else if ( count >= 2) {
        // Parent branches wit more than ond name are visually
        // identified wih an asterisk and inverse color
        console.log(`${indent}${
          child.color ? 
          highlight(name): parentCol(name)
        }${chalk.grey('-+')}`)
      } else {
        console.log(`${indent}${
          child.color ? 
          highlight(name): 
          name}${chalk.grey('-+')}`)
      } 
      this.display(child)
    }
  }
// print node value and display it's children, recursively
  print(node) {
    let highlight = chalk.yellow.bold.bgBlack; // refactor
    console.log(` ${highlight(node.value)}`)
    return this.display(node)
  }
}


module.exports = Trie