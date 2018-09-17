const { Trie, Node } = require('../Trie.01')
const chai = require('chai')
const expect = chai.expect

describe('The Node Class', () => {
  const node = new Node()

  it('creates a new Node instance', () => {
    expect(node instanceof Node).to.eql(true)
  })

  it('has (4) properties', () => {
    let keys = Object.keys(node)
    expect(keys.length).to.eql(4)
  })

  it('has a default value of `null`', () => {
    expect(node.value).to.eql(null)
  })

  it('has a value property', () => {
    expect(node).to.have.property('value')
  })

  it('has a parent object property', () => {
    expect(node).to.have.property('parent')
      .to.be.an('object')
  })

  it('has a children map property', () => {
    expect(node).to.have.property('children')
      .to.be.a('map')
  })

  it('has a isWordEnd boolean property', () => {
    expect(node).to.have.property('isWordEnd')
      .to.be.a('boolean')
  })
})

describe.only('The Trie Class', () => {
  let trie

  beforeEach(() => {
    trie = new Trie()
  })


  it('creates a new Trie instance', () => {
    expect(trie instanceof Trie).to.eql(true)
  })

  it('has a root property', () => {
    expect(trie).has.property('root')
  })

  describe('=> the #insert method', () => {
    it('Trie had the #insert method', () => {
      expect(trie.insert).to.be.a('function')
    })

    it('returns an error if no string is passed', () => {
      expect(trie.insert()).to.eql('')
    })

    it('can insert a single character', () => {
      expect(trie.insert('F')).to.eql('F')
    })

    it.only('can insert a word', () => {
      trie.print()
      expect(trie.insert('monkey')).to.eql('monkey')
    })

    it.only('returns name of inserted sub-string', () => {
      trie.insert('monkey')
      let substring = trie.insert('money')
      expect(substring).equal('money')
    })

    it('marks the end of a word', () => {
      const kids = trie.root.children
      let test = trie.insert('e')
      // console.log(kids.get('e'))
      expect(kids.get('e').isWordEnd).to.eql(true)
    })
  })

  describe('=> the #find method', () => {

  })

  describe('=> the #delete method', () => {

  })
})
