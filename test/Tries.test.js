var Trie = require('../Tries/Trie')
var chai = require('chai');
var expect = chai.expect;

describe.only('The Trie Class', () => {
  
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

  describe('=> The #insert method ...', () =>{
    
    it('... can add a new Node', () => {
      let before = Object.keys(root.children)
      trie.insert('wonderful');
      trie.insert('winter');
      trie.insert('ample');
      let after = Object.keys(root.children);
      
      expect(before).to.have.lengthOf(0)
      expect(after).to.have.lengthOf(2)
    });

    it('... transforms the letters into upperCase', () => {
      trie.insert('MIN')

      let keys = Object.keys(root.children)
      expect(keys).to.have.lengthOf(1)
      expect(keys[0]).to.eql('M')
    });

    it.only('... has a correct value property', () => {
      let arr = [ 'test', 'for', 'values']
      arr.forEach(word => trie.insert(word))
      let kids = root.children
      console.log(kids)
      for (let letter in kids){
        let value = kids[letter].value
        console.log(value)
        expect(value).to.eql(letter)
      }
    });

  });

  describe('... the #display function', () => {

    let arr = ['aged', 'again', 'arrow', 'borrow', 'mango', 'apple', 'axe', 'bay', 'pickle', 'pop', 'McGill', 'array', 'sand', 'Sandwich', 'zoo', 'xyz', 'daddy', 'sandwiches']
    // .join().toLowerCase().split(',').sort();
    let clear;
    beforeEach(() => {
      arr.forEach (word => trie.insert(word))
      clear = `${'\n'.repeat(3)}`;
    });

    it('... displays a tree', () => {
      console.log(`\n${clear} ${trie.display()}`)
    });

    it('... can highlight found words', () => {
      let test = trie.find('sandwich');
      
      expect(test).to.eql(true)
    });

    it('... can doesn`t highlight for not-found words', () => {
      let test = trie.find('sandle');
      expect(test).to.eql(false)
    });

    it('... can turns off highlight for not-found words', () => {
      console.log('+++++++++', trie.rootNode)
      trie.find('pickle');
      let test = trie.find('sandwich');
      expect(test).to.eql(true)
    });

    it('... only finds substrings with proper endpoints', () => {
      let test = trie.find('sand');
      expect(test).to.eql(false)
    });
  });

});