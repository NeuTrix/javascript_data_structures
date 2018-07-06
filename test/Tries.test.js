var Trie = require('../Tries/Trie')
var chai = require('chai');
var expect = chai.expect;

describe('The Trie Class', () => {
  
  let trie, root
  before(() => {
    trie = new Trie();
    root = trie.rootNode;
  });

  afterEach(() => { 
    trie = new Trie();
    root = trie.rootNode;
  });
  
  it('... creates a new Trie object', () => {
    expect(trie instanceof Trie).to.eql(true)
    expect(trie).to.have.property('rootNode')
  });
  
  describe('=> The rootNode ...', () => {
    
    it('... has a value of `*` ', () => {
      expect(root.value).to.eql('*')
    });

    it('... has no parent', () => {
      let test = Object.keys(root.parent).length;
      expect(test).to.eql(0)
    });
  });

  describe('=> The #insertString method ...', () =>{
    
    it('... can add a new Node', () => {
      let before = Object.keys(root.children)
      trie.insertString('wonderful');
      trie.insertString('winter');
      trie.insertString('ample');
      let after = Object.keys(root.children);
      
      expect(before).to.have.lengthOf(0)
      expect(after).to.have.lengthOf(2)
    });

    it('... transforms the letters into upperCase', () => {
      trie.insertString('MIN')

      let keys = Object.keys(root.children)
      expect(keys).to.have.lengthOf(1)
      expect(keys[0]).to.eql('M')
    });

    it('... has a correct value property', () => {
      let arr = [ 'test', 'for', 'values']
      arr.forEach(word => trie.insertString(word))
      let kids = root.children
      console.log(kids)
      for (let letter in kids){
        let value = kids[letter].value
        console.log(value)
        expect(value).to.eql(letter)
      }
    });

  });

  describe('=> The #insertArray method ...', () =>{

    it('... can add a new Node', () => {
      let arr = ['aged', 'again', 'arrow', 'borrow', 'mango', 'apple', 'axe', 'bay', 'pickle', 'pop', 'McGill', 'array', 'Sandwich', 'zoo', 'xyz', 'daddy', 'sandwiches']
      let before = Object.keys(root.children)
      trie.insertArray(arr);
      let after = Object.keys(root.children);
      expect(before).to.have.lengthOf(0)
      expect(after).to.have.lengthOf(8)
    });

    it('... rejects an empty array', () => {
      let arr = []
      let test = trie.insertArray(arr)
      console.log(test)
      expect(test).to.eql(false)
    });
  });

  describe('... the #display function', () => {

    let arr = ['aged', 'again', 'arrow', 'borrow', 'mango', 'apple', 'axe', 'bay', 'pickle', 'pop', 'McGill', 'array', 'Sandwich', 'zoo', 'xyz', 'daddy','sand', 'sandwiches']
    // .join().toLowerCase().split(',').sort();
    let clear;
    beforeEach(() => {
      arr.forEach (word => trie.insertString(word))
      clear = `${'\n'.repeat(3)}`;
    });

    it('... displays a tree', () => {
      console.log(`\n${clear} ${trie.display()}`)
    });

    it('... can highlight found words', () => {
      let test = trie.find('sandwich');
      expect(test).to.eql(true)
    });

    it('... display doesn`t highlight not-found words', () => {
      let test = trie.find('sanle');
      expect(test).to.eql(false)
    });

    it('... can turns off highlight for not-found words', () => {
      trie.find('pickle');
      let test = trie.find('sandwich');
      expect(test).to.eql(true)
    });

    it('... only finds substrings with proper endpoints', () => {
      let test = trie.find('sound');
      expect(test).to.eql(false)
    });

    it('', () => {
      trie.find("sand")
    });
  });
});