var chai = require('chai')
var expect = chai.expect;
var TreeNode = require ('../TreeNode')

describe('The Node Based tree', () => {

  let options = {
    key: '10',
    left: 900,
    data: "jim",
    right: 700,
  }
  let node = new TreeNode(options)

  it('... can create a new node', () => {
    expect(node instanceof TreeNode).to.eql(true)
  });
    
  it('... has a key property', () => {
    expect(node).to.have.property('key')
      .to.eql(options.key)
  });

  it('... has a data property', () => {
    expect(node).to.have.property('data')
      .to.eql(options.data)
  });

  it('... has a left (child) property', () => {
    expect(node).to.have.property('left')
      .to.eql(options.left)
  });

  it('... has a right (child) property', () => {
    expect(node).to.have.property('right')
      .to.eql(options.right)
  });

  it('... can show it`s data', () => {
    expect(node.show).to.eql(true)
  });

  



});