var Trie = require('../Tries/Trie')
var chai = require('chai');
var expect = chai.expect;

describe.only('The Trie Class', () => {
  
  let trie, root
  before(() => {
    trie = new Trie();
    root = trie.rootNode;
    // console.log(`\n ==> Trie: `, trie,  `\n\n ==> Root: `, root)
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

  describe('=> The #insert method ...', () => {
    
    it('... can add a new Node', () => {
      let before = Object.keys(root.children)
      expect(before).to.have.lengthOf(0)
      trie.insert('wonderful');
      let after = Object.keys(root.children);
      expect(after).to.have.lengthOf(0)
    });
  });


});